import * as React from 'react';

import Text from '../Text/Text';

const Meta = props => (
    <Text modifier="meta">
        {`${props.name}`}
    </Text>
);

export default Meta;
