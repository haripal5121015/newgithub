angular.module("ListFriend",[]).
	controller("FriendController",["$scope",function($scope)
	{
		$scope.Friends=[
		{"name":"haripal","college":"NIT","rollno":"5121015","mobile":"8816086443","city":"delhi"}
		];
		$scope.add=function(){
			$scope.Friends.push({"name":$scope.name,"college":$scope.college,"rollno":$scope.rollno,"mobile":$scope.mobile,"city":$scope.city})
			console.log($scope.Friends);
		}

	}])