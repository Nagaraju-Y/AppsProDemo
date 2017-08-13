/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'util/commonhelper'],
    function (oj, ko, $, app, commonUtil) {

        function DashboardViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.handleAttached = function (info) {
                commonUtil.requestPermissions();
            };

        }
        return DashboardViewModel;
    }
);
