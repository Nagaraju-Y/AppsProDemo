/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your uploadfile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout', 'ojs/ojfilepicker', 'ojs/ojbutton'],
    function (oj, ko, $, app) {

        function UploadFileViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.fileNames = ko.observableArray([]);

            self.selectListener = function (event) {
                var files = event.detail.files;
                for (var i = 0; i < files.length; i++) {
                    self.fileNames.push(files[i].name);
                }
                // we have to call service to upload files
            };
        }

        return UploadFileViewModel;
    }
);
