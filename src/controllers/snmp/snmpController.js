export default class SnmpController {
    constructor(snmpService) {
        this.snmpService = snmpService;
    }

    init() {
        var self = this;
        this.snmpService.get(1, 2, 3).then(function(response) {
            self.data = response.data;
        });
    }
}

SnmpController.$inject = ["SnmpService"];