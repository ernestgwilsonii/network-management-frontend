export default class SnmpController {
    constructor(snmpService) {
        this.snmpService = snmpService;
    }

    init() {
        var self = this;

        var ip = "10.43.42.11";
        var community = "password";
        var oids = [1, 2, 3, 5];

        this.snmpService.get(ip, community, oids).then(function(response) {
            console.log(response.data);
        }, function(error) {
            alert("Failed to get data using SNMP! Check browser console for response");
            console.log(error);
        });
    }
}

SnmpController.$inject = ["SnmpService"];