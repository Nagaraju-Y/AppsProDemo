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
            debugger;
            console.log(params);
            var router = params.ojRouter.parentRouter;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.tracker = ko.observable();
            self.companyBrand = ko.observable("APPS PRO");
            self.companyDesc = ko.observable("Demo App");
            self.userName = ko.observable();
            self.password = ko.observable();
            self.loginFailureText = ko.observable();

            self._showComponentValidationErrors = function (trackerObj) {
                trackerObj.showMessages();
                if (trackerObj.focusOnFirstInvalid())
                    return false;

                return true;
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
                    self.loginFailureText("Invalid User Name or Password");
                };

                if (self.userName() === "appspro" && self.password() === "apps1234") {
                    loginSuccessCbFn();
                } else {
                    loginFailCbFn();
                }
            };
            
            self.handleAttached = function() {
                app.adjustContentPadding();
            };
        }
        return LoginViewModel;
    }
);
