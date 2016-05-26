  sap.ui.jsfragment("hrc.view.Subview7", {
 
    getControllerName : function() {
      return "hrc.view.Subview7";
    },
 
   createContent : function(oController) {
      var mySignature = 
        '			<div id="canvas"> ' +
        '            	<canvas id="newSignature"> ' +
        '            	</canvas> ' +
        '        	</div>' +
        '<script>signatureCapture();</script>';


   

        var myhtml = new sap.ui.core.HTML();
        myhtml.setContent(mySignature);

        var clearBtn = new sap.m.Button({text: "Clear Signature", tap: function(evt) {
            signatureClear();
        }});

        return new sap.m.Page({
            title: "JS Fragment",
            content: [
                      myhtml,
                      clearBtn
            ]
        });
    }
 
  });