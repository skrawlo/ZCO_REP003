sap.ui.define(['sap/fe/test/ObjectPage', 'sap/ui/test/actions/Press'], function(ObjectPage, Press) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {
            iPressSectionIconTabFilterButton: function (section) {
                return this.waitFor({
                    id: new RegExp(`.*--fe::FacetSection::${section}-anchor$`),
                    actions: new Press()
                });
            }
        },
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sodexo.corep003',
            componentId: 'ZC_REP003_GEOSITE_REPORTObjectPage',
            contextPath: '/ZC_REP003_GEOSITE_REPORT'
        },
        CustomPageDefinitions
    );
});