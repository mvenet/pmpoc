sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
 
	return Controller.extend("hrc.controller.View1", {
    //Actions for Save button
    handleSave : function (evt) {
        var oData = this.getView().getModel().oData; //get data from Model
        var request = window.indexedDB.open("offline_db", 1); //Open DB
           
	    request.onupgradeneeded = function(event){ //Object Stores don't exist			    
		    var db = event.target.result;
		    var objectStore = db.createObjectStore("mydata"); //create object store
		 };
			
		request.onsuccess = function(event){//Objet Stores exist			    
			 this.myDB = event.target.result;   
// Write to local DB
            var oTransaction = this.myDB.transaction(["mydata"], "readwrite");
            var oDataStore = oTransaction.objectStore("mydata");
            oDataStore.delete(1);
            oDataStore.add(oData, 1); //1 is the key out-of-line
		};
  },
    //Actions for Read button
    handleRead : function (evt) {
        var oJSONDataModel;
        var oView = this.getView();
        var request = window.indexedDB.open("offline_db", 1); //Open DB
         
        request.onsuccess = function(event){//Objet Stores exist			    
			 this.myDB = event.target.result;   
//Read from local DB
            var oTransaction = this.myDB.transaction(["mydata"], "readwrite");
            var oDataStore = oTransaction.objectStore("mydata");
            var items = [];
            
            oDataStore.openCursor().onsuccess = function(event) {
		    var cursor = event.target.result;
          if (cursor) {
               items.push(cursor.value); //add value to items table
               cursor.continue();
               }
          else { //All data in items
		    oJSONDataModel = new sap.ui.model.json.JSONModel();
		    oJSONDataModel.setData(items[0]); //Create model with local DB data
		    oView.setModel(oJSONDataModel); //Update model used by view
		    oView.getModel().refresh(true);
          }};
        };
	}
});
});