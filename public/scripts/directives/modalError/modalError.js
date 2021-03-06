(function(){
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('modalError', ModalError);

    ModalError.$inject = [];
    function ModalError(){
        var directive = {
            restrict: 'E',
            scope: {
                body: '@'
            },
            link: link,
            templateUrl: 'scripts/directives/modalError/modalError.html',
            controller: 'LayoutController',
            controllerAs: 'layoutCtrl'
        };

        return directive;

        ////////////

        function link(scope, element){
            var elementChildren = angular.element(element.children()[0]);
            var cloak = angular.element(document.getElementById('cloak'));

            scope.$on('showModalError', function(event, args){
                scope.body = args;

                cloak.addClass('show');
                elementChildren.addClass('active');
            });

            scope.$on('hideModalError', function(){
                cloak.removeClass('show');
                elementChildren.removeClass('active');
            });
        };
    };
})();