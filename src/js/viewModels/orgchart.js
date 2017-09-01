/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your organizationchart ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'jquery-orgchart'],
    function (oj, ko, $, app) {

        function organizationChartViewModel(params) {
            var self = this;

            // Header Config
            self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

            self.handleBindingsApplied = function (info) {
                var datascource = {
                    'name': 'Lao Lao',
                    'title': 'General Manager',
                    'children': [
                        {'name': 'Bo Miao', 'title': 'Department Manager'},
                        {'name': 'Su Miao', 'title': 'Department Manager',
                            'children': [
                                {'name': 'Tie Hua', 'title': 'Senior Engineer'},
                                {'name': 'Hei Hei', 'title': 'Senior Engineer',
                                    'children': [
                                        {'name': 'Pang Pang', 'title': 'Engineer'},
                                        {'name': 'Xiang Xiang', 'title': 'UE Engineer'}
                                    ]
                                }
                            ]
                        },
                        {'name': 'Yu Jie', 'title': 'Department Manager',
                            'children': [
                                {'name': 'Tie Hua', 'title': 'Senior Engineer'},
                                {'name': 'Hei Hei', 'title': 'Senior Engineer',
                                    'children': [
                                        {'name': 'Pang Pang', 'title': 'Engineer'},
                                        {'name': 'Xiang Xiang', 'title': 'UE Engineer'}
                                    ]
                                }
                            ]
                        },
                        {'name': 'Yu Li', 'title': 'Department Manager'},
                        {'name': 'Hong Miao', 'title': 'Department Manager'},
                        {'name': 'Yu Wei', 'title': 'Department Manager'},
                        {'name': 'Chun Miao', 'title': 'Department Manager'},
                        {'name': 'Yu Tie', 'title': 'Department Manager'}
                    ]
                };

                var oc = $('#chart-container').orgchart({
                    'data': datascource,
                    'depth': 10,
                    'nodeTitle': 'name',
                    'nodeContent': 'title',
                    'zoom': true,
                    'pan': true,
                    'createNode': function ($node, data) {
//                        var secondMenuIcon = $('<i>', {
//                            'class': 'fa fa-info-circle second-menu-icon',
//                            click: function () {
//                                $(this).siblings('.second-menu').toggle();
//                            }
//                        });
                        var secondMenu = '<div class="node2"><img class="avatar" style="width: 60px; height: 60px;" src="css/images/james_avatar.png"></div>';
//                        var $node2 = $node;
                        $node.remove();
                        console.log($node);
                        $node = $node.prepend(secondMenu);
//                        $node.append(secondMenuIcon).append(secondMenu);
                    }
                });
            };
        }

        return organizationChartViewModel;
    }
);
