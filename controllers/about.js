app.controller('aboutCtrl',function ($scope,$stateParams) {
    $scope.variable = "'From About Controller using UI-Router'";
    $scope.param = $stateParams.name;
    
    $scope.selected=function (params) {
        alert(JSON.stringify(params));
    }
    
    $scope.data=[
        {"type":"Appetizer","items":[
            {"name":"Gobi Manchurian","price":"$ 10","description":"Califlower with hot cilatnro sauce"},
            {"name":"Chicken 65","price":"$ 13","description":"Chines style chicken"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"},
            {"name":"Jinga Manchurian","price":"$ 11","description":"Shrimp with hot cilatnro sauce"}
            ]
        },
        
        {"type":"Entree's","items":[
            {"name":"Chicken Tikka Masala","price":"$ 21","description":"Grilled chicken with tomato creamy sauce"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Kori Gassi","price":"$ 19","description":"Chicken with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers with fresh coconut milk and red bell peppers"},
            {"name":"Chilli Chicken","price":"$ 19","description":"Indian Chines style chicken"},
            ]
        }
    ];         
    
});