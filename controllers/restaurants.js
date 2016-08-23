app.controller('restaurantsCtrl',function ($scope,$stateParams) {
    $scope.pageWidth= window.innerWidth;
    $scope.descw=document.querySelectorAll(".desc")[0].clientWidth;
    $(window).resize(function(){
    $scope.pageWidth= window.innerWidth;
        $scope.descw=document.querySelectorAll(".desc")[0].clientWidth;
    // alert(window.innerWidth);
    $scope.$apply(function(){
       //do something to update current scope based on the new innerWidth and let angular update the view.
    });
});
});