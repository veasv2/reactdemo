import { useState } from 'react';
import MenuUsuario from "./MenuUsuario";
import {
    EuiAvatar,
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiHeaderSectionItemButton,
    EuiIcon,
    EuiLink,
    EuiPopover,
    EuiSpacer,
    EuiText,
} from '@elastic/eui';

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <EuiHeader position='fixed'>
                <EuiHeaderSection grow={false}>
                    <EuiHeaderSectionItem border="right">
                        <EuiHeaderLogo>Elastic</EuiHeaderLogo>
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>

                <EuiHeaderSection side="right">
                    <EuiHeaderSectionItem>
                        <EuiHeaderSectionItemButton
                            aria-controls="headerNewsFeed"
                            aria-expanded={isVisible}
                            aria-haspopup="true"
                            aria-label={`News feed: ${true ? 'Updates available' : 'No updates'
                                }`}
                            onClick={() => { setIsVisible(true); }}
                            notification={true}>
                            <EuiIcon type="cheer" size="m" />
                        </EuiHeaderSectionItemButton>
                        {isVisible && <MenuUsuario isVisible={setIsVisible} />}
                    </EuiHeaderSectionItem>
                    <EuiHeaderSectionItem>
                        <HeaderUserMenu />
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>
            </EuiHeader>
        </>
    );
};

const HeaderUserMenu = () => {
    const id = "htmlIdGenerator()()";
    const [isOpen, setIsOpen] = useState(false);

    const onMenuButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const button = (
        <EuiHeaderSectionItemButton
            aria-controls={id}
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-label="Account menu"
            onClick={onMenuButtonClick}>
            <EuiAvatar name="John Username" size="s" />
        </EuiHeaderSectionItemButton>
    );

    return (
        <EuiPopover
            id={id}
            ownFocus
            repositionOnScroll
            button={button}
            isOpen={isOpen}
            anchorPosition="downRight"
            closePopover={closeMenu}
            panelPaddingSize="none">
            <div style={{ width: 320 }}>
                <EuiFlexGroup
                    gutterSize="m"
                    className="euiHeaderProfile"
                    responsive={false}>
                    <EuiFlexItem grow={false}>
                        <EuiAvatar name="John Username" size="xl" />
                    </EuiFlexItem>

                    <EuiFlexItem>
                        <EuiText>
                            <p>John Username</p>
                        </EuiText>

                        <EuiSpacer size="m" />

                        <EuiFlexGroup>
                            <EuiFlexItem>
                                <EuiFlexGroup justifyContent="spaceBetween">
                                    <EuiFlexItem grow={false}>
                                        <EuiLink>Edit profile</EuiLink>
                                    </EuiFlexItem>

                                    <EuiFlexItem grow={false}>
                                        <EuiLink>Log out</EuiLink>
                                    </EuiFlexItem>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </div>
        </EuiPopover>
    );
};
export default Header;