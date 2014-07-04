angular.module('components').directive('notification', function(){
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			notificationTitle: '=title'
		},
		templateUrl: 'app/directives/templates/notification.html'
	}
});