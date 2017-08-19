/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your login ViewModel code goes here
 */
define(['knockout', 'appController', 'ojs/ojcore', 'jquery', 'ojs/ojknockout-validation', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (ko, app) {

        function LoginViewModel(params) {
            var self = this;
            console.log(params);
            var router = params.ojRouter.parentRouter;
            var getTranslation = oj.Translations.getTranslatedString;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.tracker = ko.observable();
            self.companyBrand = ko.observable("APPS PRO");
            self.userName = ko.observable();
            self.userNameLabel = ko.observable();
            self.password = ko.observable();
            self.passwordLabel = ko.observable();
            self.loginLabel = ko.observable();
            self.loginFailureText = ko.observable();

            self._showComponentValidationErrors = function (trackerObj) {
                trackerObj.showMessages();
                if (trackerObj.focusOnFirstInvalid())
                    return false;

                return true;
            };

            self.enableLang = function (id) {
                $(id).css("opacity", "").css("pointer-actions", "");
                $(id).css("cursor", "pointer");
            };

            self.disableLang = function (id) {
                $(id).css("opacity", 0.3).css("pointer-actions", "none");
                $(id).css("cursor", "default");
            };

            self.getLocale = function() {
                return oj.Config.getLocale();
            };
            
            self.setLocale = function(lang) {
                oj.Config.setLocale(lang,
                    function() {
                        if (lang === 'ar') {
                            $("html").attr("lang", lang);
                            $("html").attr("dir", "rtl");
                        } else {
                            $("html").attr("lang", lang);
                            $("html").attr("dir", "ltr");
                        }
                        self.refresh();
                    }
                );
            };
            
            self.setEnglish = function () {
                if (self.getLocale() === "ar") {
                    self.setLocale("en-US");
                    self.disableLang("#english");
                    self.enableLang("#arabic");
                }
            };

            self.setArabic = function () {
                if (self.getLocale() === "en-US") {
                    self.setLocale("ar");
                    self.disableLang("#arabic");
                    self.enableLang("#english");
                }
            };

            self.refresh = function () {
                self.userNameLabel(getTranslation("login.userName"));
                self.passwordLabel(getTranslation("login.password"));
                self.loginLabel(getTranslation("login.loginLabel"));
                $("#loginButton").attr("value", getTranslation("login.loginText"));
                $("#userName").ojInputText("refresh");
                $("#password").ojInputPassword("refresh");
            };
            
            self.onLogin = function () {
                var trackerObj = ko.utils.unwrapObservable(self.tracker);

                // Validating the components
                if (!self._showComponentValidationErrors(trackerObj)) {
                    return;
                }
                
                var loginSuccessCbFn = function () {
                    self.loginFailureText("");
                    app.isUserLoggedIn(true);
                    router.go('dashboard');
                };

                var loginFailCbFn = function () {
                    app.isUserLoggedIn(false);
                    self.loginFailureText(getTranslation("login.loginFailureText"));
                };
                
                if (self.userName().toLowerCase() === "demo" && self.password().toLowerCase() === "d1234") {
                    loginSuccessCbFn();
                } else {
                    loginFailCbFn();
                }
            };
            
            function initTranslations() {
                self.userNameLabel(getTranslation("login.userName"));
                self.passwordLabel(getTranslation("login.password"));
                self.loginLabel(getTranslation("login.loginLabel"));
            }
            
            self.handleAttached = function() {
                app.adjustContentPadding();
                initTranslations();
            };
        }
        return LoginViewModel;
    }
);
