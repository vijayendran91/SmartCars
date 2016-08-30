'use strict';

const gmservice=require('../Services/gm-service');
const log4js=require('log4js');
const logger=log4js.getLogger();


exports.getVehicleBatteryInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
        var examples = {};
      examples['application/json'] = {
            "percent" : 30
        };
      logger.info("Request: getVehicleBatteryInfo");
      res.setHeader('Content-Type','application/json');
      gmservice.fetchBatteryInfo(args.id.value)
          .then(function (data){
              logger.info(JSON.stringify(data));
              res.end(JSON.stringify(data));
          });

};

exports.getVehicleDoorInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    logger.info("Request: getVehicleDoorInfo");
    res.setHeader('Content-Type','application/json');
    gmservice.fetchDoorInfo(args.id.value)
        .then( function (data){
            logger.info(JSON.stringify(data));
            res.end(JSON.stringify(data));

        });

};

exports.getVehicleFuelInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  logger.info("Request: getVehicleFuelInfo");

    res.setHeader('Content-Type', 'application/json');
    gmservice.fetchFuelinfo(args.id.value)
        .then(function (data) {
            logger.info(JSON.stringify(data));
            res.end(JSON.stringify(data));
        });
  
};

exports.getVehicleInfo = function (args, res, next) {
    /**
     * parameters expected in the args:
     * id (String)
     **/
    /*var examples = {};
     examples['application/json'] = {
     "vin" : "1213231",
     "color" : "Metallic Silver",
     "doorCount" : 4,
     "driveTrain" : "v8"
     };*/
    logger.info("Request: getVehicleInfo");
    res.setHeader('Content-Type', 'application/json');
    gmservice.fetchVehicleInfo(args.id.value)
        .then(function (data) {
            logger.info(JSON.stringify(data));
            res.end(JSON.stringify(data));
        });

};

exports.postVehicleEngineCommand = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * action (EngineCommand)
  **/

  logger.info("Request: postVehicleEngineCommand");
    let id = args.id.value;
    let command = args.action.value.action.toUpperCase();
    switch(command){
        case "START":
            command = "START_VEHICLE";
            break;
        case "STOP":
            command = "STOP_VEHICLE";
            break;
    }
    gmservice.toggelEngine(id, command)
        .then(function (data) {
            logger.info(JSON.stringify(data));
            res.end(JSON.stringify(data));
        });
  
};


