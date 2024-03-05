import React from 'react';
import SalesforceHome from '../SalesforceHome';
import {LanguageProvider} from '../../../global/contextes/LanguageContexte';

const SalesforceApp = () => {
    return (
        <LanguageProvider>
            <SalesforceHome/>
        </LanguageProvider>
    );
};

export default SalesforceApp;