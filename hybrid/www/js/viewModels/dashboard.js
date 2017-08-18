/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'util/commonhelper', 'config/services'],
    function (oj, ko, $, app, commonUtil, services) {

        function DashboardViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
            self.title = ko.observable();
            self.description = ko.observable();

            var getExampleDetailsSuccessCbFn = function(data) {
                if (data) {
                    self.title(data.title);
                    self.description(data.description);
                }
            };

            self.handleAttached = function (info) {
                commonUtil.requestPermissions();
                services.getExampleDetails().then(getExampleDetailsSuccessCbFn, app.failCbFn);
            };

        }
        return DashboardViewModel;
    }
);
