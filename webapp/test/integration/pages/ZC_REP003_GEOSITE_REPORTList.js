sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sodexo.corep003',
            componentId: 'ZC_REP003_GEOSITE_REPORTList',
            contextPath: '/ZC_REP003_GEOSITE_REPORT'
        },
        CustomPageDefinitions
    );
});