export default class SnmpService {
    constructor($http) {
        this.$http = $http;
    }
}

SnmpService.$inject = ["$http"];