var theForm = angular.module('theForm', []);



theForm.controller('theFormController', ['$scope', function ($scope) {

    $scope.labels = {
        firstHeader: "Personal information",
        secondHeader: "Payments details",
        asideTitle: "Your orders",
        totalPurchases: "Total purchases",
        taxLabel: "Estimated tax",
        totalLabel: "Total"
    };

    $scope.orders =[{
            wareName: "Apple Watch Sport",
            warePrice: 580
        },{
            wareName: "Modern Buckle",
            warePrice: 380
        }];

    $scope.summary = {
        dubaiTax: 0,
        totalPrice: function() {
            var total = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                total = total + $scope.orders[i].warePrice;
            }
            return total;
        }
    }
    $scope.newUser = {};

    $scope.formSubmitted = false;
    $scope.isSaving = false;

    $scope.submitForm = function (form) {
        if($scope.form.$valid &&  $scope.formSubmitted == false) {
            $scope.formSubmitted = true;
            $scope.isSaving = true;
            $scope.newUser.firstName = $scope.user.firstName;
            $scope.newUser.lastName = $scope.user.lastName;
            $scope.newUser.email = $scope.user.email;
            $scope.newUser.country = $scope.user.country;
            $scope.newUser.postCode = $scope.user.postCode;
            $scope.newUser.phone = $scope.user.phone;
            $scope.newUser.creditCard = $scope.user.creditCard;
            $scope.newUser.securityCode = $scope.user.securityCode;
            $scope.newUser.expirationDate = $scope.user.expirationDate;
            console.log($scope.newUser);
            console.log($scope.orders);
        }
    }
}]);