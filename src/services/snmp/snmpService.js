export default class SnmpService {
    constructor($http) {
        this.$http = $http;
    }
    
    get(ip, community, oids) {
        var parsedOids = this.parseOidsArray(oids);
        
        return this.$http.get("http://localhost:9001/snmp/" + ip + "/" + community + "/" + parsedOids);
    }

    parseOidsArray(oids) {
        if(oids.length === 0) {
            return "";
        }
        else if(oids.length === 1) {
            return "" + oids[0];
        }

        var routeParamOids = "";

        oids.forEach(function(v, i, a) {
            routeParamOids += v + "+";
        });

        routeParamOids = routeParamOids.substr(0, routeParamOids.length-1);

        console.log(routeParamOids);

        return routeParamOids;
    }
}

SnmpService.$inject = ["$http"];