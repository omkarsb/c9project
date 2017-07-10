myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/codeonce.png",
        link: "https://www.youtube.com/dashboard?o=U"
    },
    {
        image: "img/codeit.png",
        link: "https://www.youtube.com/dashboard?o=U"
    },
    {
        image: "img/coderday.png",
        link: "https://www.youtube.com/dashboard?o=U"
    },
    {
        image: "img/whilealive.png",
        link: "https://www.youtube.com/dashboard?o=U"
    }]
}]);