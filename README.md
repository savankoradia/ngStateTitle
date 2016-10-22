# ngStateTitle
Directive to display title from state route params

#Installation

#### Bower

    // Get dependency using command line
    bower install ngStateTitle --save

    // Include in your main HTML file
    <script src="/path/to/bower_components/ng-state-title/ngStateTitle.js"></script>
    
    
#### npm

    // Get dependency using command line
    npm install ng-state-title --save

    // Include in your main HTML file
    require("ng-state-title");

    
#Usage

####initialization

##### in application module
    angular.module("myDemoApp", [
        ...
        "ngStateTitle"
        ...
    ]);

##### in viewfile
    <!DOCTYPE html>
    <html ng-app="myDemoApp">
        <head>
            <title page-title>Default</title>
        </head>
    </html>
    
#####in routing
    myDemoApp.config(function ($stateProvider) {
        $stateProvider
            .state("dashboard", {
                url: "/dashboard",
                templateUrl: "partials/state1.html",
                data: {
                    pageTitle: "Dashboard"
                }
            });
    }
