/**
 * Created by vijay on 8/29/16.
 */
'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();

const Q = require('q');
const Client = require('node-rest-client').Client;
const client = new Client();

const base_api = "http://gmapi.azurewebsites.net";

client.registerMethod("car_info", base_api+"/getVehicleInfoService", "POST");
client.registerMethod("security_info", base_api+"/getSecurityStatusService", "POST");
client.registerMethod("energy_info", base_api+"/getEnergyService", "POST");
client.registerMethod("engine_info", base_api+"/actionEngineService", "POST");


exports.getCarInfo  = function(args) {
    logger.info("Request data from GM API /getVehicleInfoService");
    let defer = Q.defer();
    client.methods.car_info(args,function(data,resp){
        defer.resolve(data);
    });
    logger.debug("Return response from GM API /getVehicleInfoService");
    return defer.promise;
};

exports.getCarSecurityInfo = function(args) {
    logger.info("Request data from GM API /getSecurityStatusService");
    let defer = Q.defer();
    client.methods.security_info(args,function(data,resp){
        defer.resolve(data);
    });
    logger.debug("Return response from GM API /getSecurityStatusService");
    return defer.promise;
};


exports.getVehicleBatteryInfo= function(args){
    logger.info("Request data from GM API /getEnergyService");
    let defer=Q.defer();
    client.methods.energy_info(args, function(data,resp){
       defer.resolve(data);
    });
    logger.debug("Data recieved from GM API /getEnergyService");
    return defer.promise;
};

exports.getCarEngineInfo = function(args) {
    logger.info("Request data from GM API /actionEngineService");
    let defer = Q.defer();
    client.methods.engine_info(args,function(data,resp){
        defer.resolve(data);
    });
    logger.debug("Return response from GM API /actionEngineService");
    return defer.promise;
};

exports.getCarEnergyInfo = function(args) {
    logger.info("Request data from GM API /getEnergyService");
    let defer = Q.defer();
    client.methods.energy_info(args,function(data,resp){
        defer.resolve(data);
    });
    logger.debug("Return response from GM API /getEnergyService");
    return defer.promise;
};