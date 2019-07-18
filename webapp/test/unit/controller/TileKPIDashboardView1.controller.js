/*global QUnit*/

sap.ui.define([
	"TileKPIDashboard/TileKPIDashboard/controller/TileKPIDashboardView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileKPIDashboardView1 Controller");

	QUnit.test("I should test the TileKPIDashboardView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});