app.controller("homeCtrl",function($scope,$state,userData,$filter,$cookies,$http){
    $scope.variable = "'From Home Controller using UI-Router'";
     $scope.username= $cookies.get('userDetails');


    $scope.routes = [{"location":"about"},{"location":"contact"},{"location":"contact.second"}];
    $scope.restaurants=[{"location":"New York", "name":"Thali"},{"location":"New York","name":"Thai"},{"location":"Ridgefield","name":"Tangda"}];
    $scope.locations=[{"name":"New York"},{"name":"New Jersey"},{"name":"Ridgefield"}];    
    
    $http({method: 'GET', url: 'http://10.12.18.118:90/api/deli/getest'}).
        then(function(response) {
          $scope.status = response.status;
          $scope.restaurants = response.data;
        }, function(response) {
          $scope.restaurants = response.data || "Request failed";
          $scope.status = response.status;
      });
    
    $scope.gotoroute = function(){
        $state.go($scope.route.location);
        // $state.transitionTo($scope.route.location);
    };
    
    $scope.$watch(function (){return $scope.selectedLocation} ,function (newVal,oldVal) {
        $scope.selectedRestaurant=null;
        if($scope.selectedLocation==""){
            $scope.gridData=$scope.restaurants;
        }    
    });
    
     $scope.$watch(function(){return $scope.selectedRestaurant},function(newVal,oldVal){
          if($scope.selectedRestaurant==""){
            $scope.gridData=$scope.restaurants;
        } 
     });
    
    
    
      $scope.gridOptions = {};
        
        $scope.Delete = function(row) {
            alert(JSON.stringify(row));
            $state.go('about');
            // var index = $scope.gridOptions.data.indexOf(row.entity);
            // $scope.gridOptions.data.splice(index, 1);
        };
        $scope.gridOptions.columnDefs = [{
            name: 'Location',
            field: 'location',
        }, {
            name: 'Restaurant',
            field: 'name'
        }, {
            name: 'ShowScope',
            cellTemplate: '<button class="btn-success btn" ng-click="grid.appScope.Delete(row.entity)">Menu</button>'
        }];
        $scope.gridData=$scope.restaurants;
        $scope.gridOptions.data = 'gridData';
       $scope.tofilter=[];
       
       $scope.AreaSelected=function (thisObj) {
           $scope.tofilter=[];
           $scope.selectedLocation=thisObj.name;
            $scope.gridData.forEach(function(row) {
                if(row.location==$scope.selectedLocation){
                    $scope.tofilter.push(row);
                }
                $scope.gridData=$scope.tofilter;
            });
        }
        
        $scope.RestaurantSelected=function(thisObj){
            $scope.tofilter=[];            
            $scope.selectedRestaurant=thisObj.name;
            $scope.gridData.forEach(function(row) {
                if(row.name==$scope.selectedRestaurant){
                    $scope.tofilter.push(row);
                }
                $scope.gridData=$scope.tofilter;
            });
        };
    
    
});


9666738689