angular.module("ngStateTitle", [])
.directive("pageTitle", ['$rootScope', '$timeout', function($rootScope, $timeout){
  return {
    link: function(scope, element){
      var listener = function(event, toState){
        var title = "Default";
        if (toState != undefined && toState.data != undefined && toState.data.pageTitle != undefined) {
          title = toState.data.pageTitle;
        }
        element.text(title);
      };
      $rootScope.$on('$stateChangeSuccess', listener);
    }
  };
}]);
