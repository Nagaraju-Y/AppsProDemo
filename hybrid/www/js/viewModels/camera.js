/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your camera ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'util/commonhelper', 'util/imageSavingUtil', 'ojs/ojbutton'],
    function (oj, ko, $, app, commonUtil, imgUtil) {

        function CameraViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.capturePhoto = function () {
                navigator.camera.getPicture(imgUtil.onCaptureSuccess, imgUtil.onCaptureFail, {
                    quality: 50,
                    destinationType: Camera.DestinationType.FILE_URI
                });
            };
        }

        return CameraViewModel;
    }
);
