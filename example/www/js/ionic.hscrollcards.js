(function(ionic) {

  // SCREENWIDTH = screen.width;
  // CARDWIDTH = 120;


  angular.module('ionic.contrib.ui.hscrollcards', ['ionic'])

    .directive('hscroller', ['$timeout', function($timeout) {
      return {
        restrict: 'E',
        template: '<div class="hscroller" ng-transclude></div>',
        replace: true,
        transclude: true,

        compile: function(element, attr) {
          return function($scope, $element, $attr) {

            var el = $element[0];
            angular.element($element).bind("scroll", function(){
              var left = $element[0].scrollLeft;
              console.log($element.childNodes);
            });


          }
        },
      }
    }])

    .directive('hcard', ['$rootScope', function($rootScope) {
      return {
        restrict: 'E',
        template: '<div class="hscroller-card" ng-transclude></div>',
        replace: true,
        transclude: true,
        scope: {
          desc: '@',
          image: '@',
          index: '@'
        },
        link: function(scope, element, attrs){
          var img = angular.element("<img class='hscroller-img' src='"+attrs.image+"' />");
          element.append(img);
          element.append('<div class="hscroller-label">'+attrs.desc+'</div>');
          var animationClass = 'hscroller-card-animated-' + attrs.index.toString();
          element.addClass(animationClass);

        },

      }
    }]);

})(window.ionic);