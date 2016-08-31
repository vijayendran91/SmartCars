/**
 * Created by vijay on 8/30/16.
 */

var request = require('request');
var h= "http://localhost:8080";
//var mock = require("nodeunit-mock");
var frisby=require('frisby');



//Unit Test for getting battery info values

frisby.create('Test case for Battery Info')
    .get('http://localhost:8080/vehicles/1234/battery')
    .expectStatus(200)
    .expectHeaderContains('Content-Type','application/json')

    .expectJSON({
        percent: function (val){expect(val).toBeType(String);}

    })
    .toss();

// Unit Test for getting Engine Info

frisby.create('Test Case for Engine Info')
    .post('http://localhost:8080/vehicles/1234/engine', {
        "action": "start"
    })
    //.expectHeaderContains('Content-Type', 'json')
    .expectJSON({ 'status': String })
    .toss();

// Unit Test for getting Fuel Info
frisby.create('Test case for Vehicle Fuel Info')
    .get('http://localhost:8080/vehicles/1234/fuel')
    .expectStatus(200)
    .expectHeaderContains('Content-Type','application/json')
    .expectJSON({
        percent: String
    })
    .toss();


// Unit Test for getting Vehicle Info
frisby.create('Test case for Vehicle Info')
    .get('http://localhost:8080/vehicles/1234')
    .expectStatus(200)
    .expectHeaderContains('Content-Type','application/json')
    .expectJSON({
        percent: String
    })
    .toss();



frisby.create('Test case for Security Info')
    .get('http://localhost:8080/vehicles/1234/doors')
    .expectStatus(200)
    .expectHeaderContains('Content-Type','application/json')
    .expectJSON({
        doors: Array
    })
    .toss();

