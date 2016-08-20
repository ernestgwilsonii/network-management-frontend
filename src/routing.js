import angular from "angular";

routes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            template: require("./controllers/home/home.html"),
            controller: "HomeController",
            controllerAs: "$ctrl"
        })
        .state("snmp", {
            url: "/snmp",
            template: require("./controllers/snmp/snmp.html"),
            controller: "SnmpController",
            controllerAs: "$ctrl"
        });
}