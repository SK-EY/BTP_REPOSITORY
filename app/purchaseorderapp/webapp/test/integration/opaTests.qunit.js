sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sk/app/purchaseorderapp/test/integration/FirstJourney',
		'sk/app/purchaseorderapp/test/integration/pages/POsList',
		'sk/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'sk/app/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sk/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);