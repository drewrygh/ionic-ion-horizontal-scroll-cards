(function(ionic) {

  // SCREENWIDTH = screen.width;
  // CARDWIDTH = 120;


  angular.module('ionic.contrib.ui.hslider', ['ionic'])

    .directive('hslider', ['$timeout', function($timeout) {
      return {
        restrict: 'E',
        template: '<div class="hslider" ng-transclude></div>',
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
        template: '<div class="hslider-card" ng-transclude></div>',
        replace: true,
        transclude: true,
        scope: {
          desc: '@',
          image: '@',
          index: '@'
        },
        link: function(scope, element, attrs){
          var img = angular.element("<img class='hslider-img' src='"+attrs.image+"' />");
          element.append(img);
          element.append('<div class="hslider-label">'+attrs.desc+'</div>');
          var animationClass = 'hslider-card-animated-' + attrs.index.toString();
          element.addClass(animationClass);

        },

      }
    }]);

})(window.ionic);