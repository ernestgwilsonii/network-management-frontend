// impport css
import "./css/shared.css";

// import angular dependencies
import angular from "angular";
import uirouter from 'angular-ui-router';

// config
import routing from "./routing";

// services
import SnmpService from "./services/snmp/snmpService";

// controllers
import HomeController from "./controllers/home/homeController";
import SnmpController from "./controllers/snmp/snmpController";

// App
angular.module("networkManagementApp", [uirouter])

// Home
.controller("HomeController", HomeController)

// SNMP
.service("SnmpService", SnmpService)
.controller("SnmpController", SnmpController)

.config(routing);
