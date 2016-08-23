app.factory('userData',function () {
   var userDataObj={};
   userDataObj.username='';
   userDataObj.serUserName=function (loginName) {
       userDataObj.username=loginName;
   };
   return userDataObj;
});