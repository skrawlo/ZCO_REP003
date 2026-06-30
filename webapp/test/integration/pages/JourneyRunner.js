sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"sodexo/corep003/test/integration/pages/ZC_REP003_GEOSITE_REPORTList",
	"sodexo/corep003/test/integration/pages/ZC_REP003_GEOSITE_REPORTObjectPage"
], function (JourneyRunner, ZC_REP003_GEOSITE_REPORTList, ZC_REP003_GEOSITE_REPORTObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('sodexo/corep003') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_REP003_GEOSITE_REPORTList: ZC_REP003_GEOSITE_REPORTList,
			onTheZC_REP003_GEOSITE_REPORTObjectPage: ZC_REP003_GEOSITE_REPORTObjectPage
        },
        async: true
    });

    return runner;
});

