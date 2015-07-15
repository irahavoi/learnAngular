/**
 * Created by irahavoi on 7/13/2015.
 */
(function(){
    var app = angular.module("myApp", []);

    app.controller('StoreController', function(){
       this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        }

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });

    app.controller("ReviewController", function(){
       this.review = {};

       this.addReview = function(product){
           product.reviews.push(this.review);
           this.review = {};
       }
    });

    var gems = [
        {
            name : 'Dodecahedron',
            price: 2.95,
            description: 'This is a description for Dodecahedron',
            canPurchase: true,
            soldOut: false,
            reviews: [{
                stars: 5,
                author: 'Test Author',
                body: 'Test Body'
            }]

        },
        {
            name : 'Some Gem',
            price: 10,
            description: 'Some gem description',
            canPurchase: true,
            soldOut: false,
            reviews: []

        }
    ];

})();