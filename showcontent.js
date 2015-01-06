angular.module("myDemo",[]).
	controller("list",["$scope",function($scope)
	{
		$scope.array=[
		{"name":"haripal"}
		];
		$scope.add=function(){
			console.log($scope.name)
			
		}

	}])


