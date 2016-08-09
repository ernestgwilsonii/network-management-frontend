export default class SnmpController {
    constructor(snmpService) {
        this.snmpService = snmpService;
        this.snmpService.get(1,2,3);
    }

    welcome() {
        return "Welcome to the Network Management App - SNMP";
    }
}

SnmpController.$inject = ["SnmpService"];