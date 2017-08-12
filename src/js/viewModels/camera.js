/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your camera ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojbutton'],
    function (oj, ko, $, app) {

        function CameraViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
            
            self.capturePhoto = function() {
                console.log("Have to capture photo");
            };
        }

        return CameraViewModel;
    }
);
