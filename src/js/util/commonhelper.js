/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],
  function () {

    function commonHelper() {

        var self = this;

        self.getHost = function() {
            var host = 'https://{{service details}}/';
            return host;
        };

    }

    return new commonHelper();
});
