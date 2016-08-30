/**
 * Created by vijay on 8/29/16.
 */
'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();
const Q = require('q');
const gmsapi = require('./gm_api_svc');

let args = {headers: {"Content-Type": "application/json"}};

exports.fetchVehicleInfo = function (id) {
    let defer = Q.defer();
    logger.info("Fetch INFO from getCarInfo");
    args.data = JSON.stringify({"id": String(id), "responseType": "JSON"});
    gmsapi.getCarInfo(args)
        .then(function (data) {
            defer.resolve({
                vin: data.data.vin.value,
                color: data.data.color.value,
                doorCount: Boolean(data.data.fourDoorSedan.value) ? 4 : 2,
                driveTrain: data.data.driveTrain.value
            });
        })
        .catch(function (err) {
            defer.resolve({
                msg: " ID NOT FOUND"
            });
        });

    return defer.promise;

};

exports.fetchDoorInfo = function (id) {
    let defer = Q.defer();
    logger.info("Fetch INFO from getCarSecurityInfo");
    args.data = JSON.stringify({"id": String(id), "responseType": "JSON"});

    gmsapi.getCarSecurityInfo(args)
        .then(function (data) {
            var arr = data.data.doors.values;
            var res = []
            arr.forEach(function (val) {
                res.push({location: val.location.value, locked: val.locked.value});
            });
            defer.resolve({
                doors: res
            });
        })
        .catch(function (err) {
            defer.resolve({
                msg: " ID NOT FOUND"
            });
        });

    return defer.promise;
};

exports.fetchBatteryInfo = function (id) {
    let defer = Q.defer();
    logger.info("Fetch INFO from getCarEnergyInfo");
    args.data = JSON.stringify({"id": String(id), "responseType": "JSON"});

    gmsapi.getVehicleBatteryInfo(args)
        .then(function (data) {
            logger.debug(JSON.stringify(data));
            defer.resolve({
                percent: data.data.batteryLevel.value==="null"?"Unavailable":data.data.batteryLevel.value
            });
        })
        .catch(function (err) {
            defer.resolve({
                msg: " ID NOT FOUND"
            });
        });

    return defer.promise;

};

exports.toggelEngine = function (id, command) {
    let defer = Q.defer();
    logger.info("Fetch INFO from getCarEngineInfo");
    args.data = JSON.stringify({"id": String(id), "responseType": "JSON", "command": command});

    gmsapi.getCarEngineInfo(args)
        .then(function (data) {
            logger.debug(JSON.stringify(data));
            switch(data.status){
                case "200":
                    defer.resolve({
                        status: data.actionResult.status
                    });
                    break;
                case "400":
                    defer.resolve({
                        status: data.reason
                    });
                    break;
                default:
                    defer.resolve({
                        status: "Err Response"
                    });
                    break;
            }
        })
        .catch(function (err) {
            defer.resolve({
                msg: " ID NOT FOUND"
            });
        });

    return defer.promise;

};

exports.fetchFuelinfo = function (id) {
    let defer = Q.defer();
    logger.info("Fetch INFO from getCarEnergyInfo");
    args.data = JSON.stringify({"id": String(id), "responseType": "JSON"});

    gmsapi.getCarEnergyInfo(args)
        .then(function (data) {
            logger.debug(JSON.stringify(data));
            defer.resolve({
                percent: data.data.tankLevel.value==="null"?"Unavailable":data.data.tankLevel.value
            });
        })
        .catch(function (err) {
            defer.resolve({
                msg: " ID NOT FOUND"
            });
        });

    return defer.promise;
};