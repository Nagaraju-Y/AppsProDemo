/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['text!./apps-hijridatepicker.html', 'ojs/ojcore', 'knockout', 'jquery', 'appController', 'jquery-calendar', 'jquery-calendar-plus', 'jquery-calendar-ummalqura',
    'jquery-calendar-plugin', 'jquery-calendar-picker', 'ojs/ojinputtext'
], function (template) {

    /**
     * The view model for the main content view template
    
    * */
    function appsHijriDatePickerViewModel() {
        var self = this;
        
        self.getDate = function () {
            var calendar = $.calendars.instance();
            var tempDate = calendar.parseDate('mm/dd/yyyy', '01/26/1432');
            tempDate = calendar.formatDate('yyyy/dd/mm', tempDate);
            $("#datePicker").val(tempDate);
            $("#datePicker").calendarsPicker({calendar: $.calendars.instance('ummalqura')});
        };
        
        return appsHijriDatePickerViewModel;
    };
    
    return {viewModel: {createViewModel: appsHijriDatePickerViewModel }, template: template};
});
