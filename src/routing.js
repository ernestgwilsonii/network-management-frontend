import angular from "angular";

routes.$inject =  ["$routeProvider", "$locationProvider"];//["$stateProvider", "$urlRouterProvider", "$locationProvider"];

export default function routes($routeProvider, $locationProvider) {//routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider.when("/", {
        controller: "HomeController",
        controllerAs: "$ctrl",
        template: require("./controllers/home/home.html"),
    }).when("/snmp", {
        controller: "SnmpController",
        controllerAs: "$ctrl",
        template: require("./controllers/snmp/snmp.html"),
    }).otherwise("/");

    // $urlRouterProvider.otherwise("/");

    // $stateProvider
    //     .state("home", {
    //         url: "/",
    //         template: require("./controllers/home/home.html"),
    //         controller: "HomeController",
    //         controllerAs: "$ctrl"
    //     })
    //     .state("snmp", {
    //         url: "/snmp",
    //         template: require("./controllers/snmp/snmp.html"),
    //         controller: "SnmpController",
    //         controllerAs: "$ctrl"
    //     });
}