import React from 'react';

import {
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutHeader,
    EuiText,
    EuiTitle,
    EuiCodeBlock,
} from '@elastic/eui';

type Props = {
    isVisible: Function
}
const MenuUsuario: React.FC<Props> = ({ isVisible }) => {
    return (
        <EuiFlyout
            ownFocus
            onClose={() => isVisible(false)}
            aria-labelledby="flyoutTitle">
            <EuiFlyoutHeader hasBorder>
                <EuiTitle size="m">
                    <h2 id="flyoutTitle">A typical flyout</h2>
                </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
                <EuiText>
                    <p>
                        For consistency across the many flyouts, please utilize the
                        following code for implementing the flyout with a header.
                    </p>
                </EuiText>
                <EuiCodeBlock language="html">{"<h2></h2>"}</EuiCodeBlock>
            </EuiFlyoutBody>
        </EuiFlyout>
    )
};

export default MenuUsuario;