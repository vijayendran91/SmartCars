'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getVehicleBatteryInfo = function getVehicleBatteryInfo (req, res, next) {
  Default.getVehicleBatteryInfo(req.swagger.params, res, next);
};

module.exports.getVehicleDoorInfo = function getVehicleDoorInfo (req, res, next) {
  Default.getVehicleDoorInfo(req.swagger.params, res, next);
};

module.exports.getVehicleFuelInfo = function getVehicleFuelInfo (req, res, next) {
  Default.getVehicleFuelInfo(req.swagger.params, res, next);
};

module.exports.getVehicleInfo = function getVehicleInfo (req, res, next) {
  Default.getVehicleInfo(req.swagger.params, res, next);
};

module.exports.postVehicleEngineCommand = function postVehicleEngineCommand (req, res, next) {
  Default.postVehicleEngineCommand(req.swagger.params, res, next);
};
