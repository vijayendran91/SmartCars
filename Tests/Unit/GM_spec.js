/**
 * Created by vijay on 8/30/16.
 */

var request = require('request');
var h= "http://localhost:8080";
var frisby=require('frisby');


frisby.create('Test Cases to reach GM API, VehicleInfoService')
    .post('http://gmapi.azurewebsites.net/getVehicleInfoService', {
        "id": "1234",
        "responseType": "JSON"
    })
    //.expectHeaderContains('Content-Type', 'json')
    .expectStatus(200)
    .toss();

frisby.create('Test Cases to reach GM API, VehicleInfoService')
    .post('http://gmapi.azurewebsites.net/getSecurityStatusService', {
        "id": "1234",
        "responseType": "JSON"
    })
    //.expectHeaderContains('Content-Type', 'json')
    .expectStatus(200)
    .toss();

frisby.create('Test Cases to reach GM API, VehicleInfoService')
    .post('http://gmapi.azurewebsites.net/getEnergyService', {
        "id": "1234",
        "responseType": "JSON"
    })
    //.expectHeaderContains('Content-Type', 'json')
    .expectStatus(200)
    .toss();

frisby.create('Test Cases to reach GM API, VehicleInfoService')
    .post('http://gmapi.azurewebsites.net/actionEngineService', {
        "id": "1234",
        "responseType": "JSON",
        "command": "START_VEHICLE|STOP_VEHICLE"
    })
    //.expectHeaderContains('Content-Type', 'json')
    .expectStatus(200)
    .toss();
