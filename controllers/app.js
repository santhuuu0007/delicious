var app = angular.module("delicious",['ui.router','ui.grid','ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html"
              })
            .state('login',{
                url:"/login",
                templateUrl:"views/login.html",
                controller:"loginCtrl"
               
            })
            .state('chef',{
                url:"/chef",
                templateUrl:"views/chef.html",
                controller:"chefCtrl"
            })
            .state('restaurants',{
                url:"/restaurants",
                templateUrl:"views/restaurants.html",
                controller:"restaurantsCtrl"
            })
            .state('about', {
                url: "/about/:name",
                templateUrl: 'views/about.html'
            })
            .state('catering',{
                url:"/catering",
                templateUrl:'views/catering.html',
                controller:'cateringCtrl'
            })
            .state('pickup',{
                url:"/pickup",
                templateUrl:'views/pickup.html',
                controller:'pickupCtrl'
            })
            .state('about.child', {
                url: "/child",
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'headerCtrl'
                    },
                    'body': {
                        templateUrl: 'views/body.html',
                        controller: 'bodyCtrl' 
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'footerCtrl'
                    }
                },                
              })                
            .state('contact', {
                url: "/contact",
                templateUrl: "views/contact.html",
                controller: "contactCtrl"
              })               
            .state('contact.second', {
                url: "/second",
                templateUrl: "views/contact_second.html",
                controller: function($scope) {
                  $scope.variable = "'From Contact - Second Child Controller using UI-Router'";
                }
              })   
            .state('contact.third', {
                url: "/third",
                templateUrl: "views/contact_third.html",
                controller: function($scope) {
                  $scope.variable = "'From Contact - Third Child Controller using UI-Router'";
                }
              })                
              ;
    $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true).hashPrefix('!')    
    // Use the above for HTML5 mode
    

});


app.controller("headerCtrl",function($scope){
    $scope.header = "Text From the UI Router's UI-VIEW Header controller";
});
app.controller("footerCtrl",function($scope){
    $scope.footer = "Text From the UI Router's UI-VIEW Footer controller";
});
app.controller("bodyCtrl",function($scope){
    $scope.body = "Text From the UI Router's UI-VIEW Body controller";
});

app.controller("mainCtrl",function($scope,$state,userData,$cookies){
     $scope.loggedOut=true;
     $scope.loggedin=false;
     $scope.username= $cookies.get('userDetails');
     
     $scope.$watch(function(){return userData.username},function(newVal,oldVal){
           // alert(userData.username);x
            alert(newVal+'ssdfsf'+oldVal);
            if(userData.username=='santhosh'){
                $scope.loggedOut=false;
                $scope.loggedin=true;
            }
     });
});

