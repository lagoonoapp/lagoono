import React, { Suspense } from 'react';
import { commonFunctions } from '@src/utils/commonFunctions';

const IntegrationIcon = ({ code }) => {
    const IconComponent = React.lazy(() =>
        import(`@src/components/dashboard/integrationIcons/${commonFunctions.capitalizeFirstLetter(code)}Icon`)
        .then(module => ({ default: module[`${commonFunctions.capitalizeFirstLetter(code)}Icon`] }))
    );

    return (
        <Suspense fallback={null}>
            <IconComponent />
        </Suspense>
    );
};


export default IntegrationIcon;