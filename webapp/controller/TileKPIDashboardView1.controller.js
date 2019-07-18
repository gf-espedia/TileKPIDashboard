sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileKPIDashboard.TileKPIDashboard.controller.TileKPIDashboardView1", {
		onInit: function () {
			history.back();
			window.open("https://kpidashboard-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});