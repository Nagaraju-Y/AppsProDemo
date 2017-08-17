/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your ummalqura ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'jquery-calendar', 'jquery-calendar-plus', 'jquery-calendar-ummalqura', 'jquery-calendar-plugin', 'jquery-calendar-picker',
    'ojs/ojinputtext'],
    function (oj, ko, $, app) {

        function UmmalquraViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.selectedDate = ko.observable();

            self.getDate = function () {
                var calendar = $.calendars.instance();
                var tempDate = calendar.parseDate('mm/dd/yyyy', '01/26/1432');
                tempDate = calendar.formatDate('yyyy/dd/mm', tempDate);
                $("#datePicker").val(tempDate);
                $("#datePicker").calendarsPicker({calendar: $.calendars.instance('ummalqura')});
            };
        }

        return UmmalquraViewModel;
    }
);