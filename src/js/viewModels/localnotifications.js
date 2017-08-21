/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your localnotifications ViewModel ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'util/commonhelper', 'util/imageSavingUtil', 'ojs/ojbutton'],
    function (oj, ko, $, app, commonUtil) {

        function LocalNotificationsViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            var checkPermission = function() {
                cordova.plugins.notification.local.hasPermission(function (granted) {
                    if (!granted) {
                        cordova.plugins.notification.local.registerPermission(function (status) {
                            if (!status) {
                                navigator.notification.alert("You have cancelled the permission!");
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else {
                        return true;
                    }
                });
            };

            self.scheduleNotification = function () {
                if (checkPermission) {
                    var date = new Date();
                    cordova.plugins.notification.local.schedule({
                        id: 1,
                        title: "Schedule message Title",
                        message: "Sehedule Message Text",
                        firstAt: date,
                        every: 5
                    });
                }
            };
            
            self.queryNotifications = function() {
                cordova.plugins.notification.local.getTriggered(function (notifications) {
                    console.log(notifications);
                    console.log(notifications.length);
                });
            };
            
            self.cancelAllNotifications = function() {
                cordova.plugins.notification.local.cancelAll(function () {
                    console.log('All notifications have been ancelled');
                }, this);
            };
            
            self.handleAttached = function() {
                checkPermission();
            };
        }

        return LocalNotificationsViewModel;
    }
);
