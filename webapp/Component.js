sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"hrc/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("hrc.Component", {

		metadata: {
			manifest: "json"
		},
		dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				]
			},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			//Init Model with json file
 		    var oJSONDataModel;
 			oJSONDataModel= new sap.ui.model.json.JSONModel("model/data.json"); 
 			this.setModel(oJSONDataModel);
		
			
		}
	});

});