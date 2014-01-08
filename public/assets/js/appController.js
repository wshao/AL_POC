var globalCms = angular.module('globalCms', []);
 
globalCms.controller('cmsController', function cmsController($scope, $http) {
	$scope.languages = [
		{	'id' : '1',
			'name': 'NODE',
		 	'desc': 'Fast just got faster.'},
		{	'id' : '2',
			'name': 'PHP',
		 	'desc': 'Open Source.'},
		{	'id' : '3',
			'name': 'JAVA',
		 	'desc': 'Oracle Java.'}
	];

	$scope.sendData = function() {
		
		$scope.datas = $scope.lang;
		$http.post('/', $scope.datas)
			.success(function(data) {
				console.log('success: ' + data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
});
