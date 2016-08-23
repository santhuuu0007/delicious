app.controller("loginCtrl",function($scope,userData,$state,$cookies){
   $scope.loginUserName="";
   $scope.loginPassword="";
   $scope.login=function () {
       $cookies.put('userDetails', $scope.loginUserName);
       userData.serUserName($scope.loginUserName);
       $state.go("home");
   }
   
   
   
   $scope.newUser={};
   $scope.register=function (params) {

   }
   
   
});