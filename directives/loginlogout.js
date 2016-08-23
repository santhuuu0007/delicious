app.directive("loginlogout",function () {
    return{
        restrict:'E',
        scope:{
            username:'=',
            password:'=',
            submit:'$'
        },
        templateUrl:'views/login.html',
        compile:function (elem,attrs) {
            
        },
        controller:'loginCtrl',
        link:function (params) {
            
        }
    }
})