export default class SnmpService {
    constructor($http) {
        this.$http = $http;
    }
    
    get(ip, community, oids) {
        return this.$http.get("http://localhost:9001/snmp/" + ip + "/" + community + "/" + oids);
    }
}

SnmpService.$inject = ["$http"];