import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    InboxIcon,
    MessageIcon,
    UploadIcon,
    MenuLanguageIcon,
    MenuFeedbackHelpIcon,
    MenuKeyboardIcon,
    MenuUserProfileIcon,
    MenuGetCoinsIcon,
    MenuSettingIcon,
    MenuLogOutIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        // Menu language
        icon: <MenuLanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        // Menu Feedback and Help
        icon: <MenuFeedbackHelpIcon />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        // Menu Keyboard shortcuts
        icon: <MenuKeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            // View Profile
            icon: <MenuUserProfileIcon />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            // Get Coins
            icon: <MenuGetCoinsIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            // Settings
            icon: <MenuSettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            // Log out
            icon: <MenuLogOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO SECTION */}
                <img src={images.logo} alt="Tiktok Icon" />

                {/* SEARCH SECTION */}
                <Search />

                {/* ACTION SECTION */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy deplay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://static.vecteezy.com/system/resources/previews/015/917/576/non_2x/pretty-girl-with-long-blonde-hair-and-blue-dress-free-vector.jpg"
                                className={cx('user-avatar')}
                                alt="User Avatar"
                                // fallback="https://i.pinimg.com/564x/d7/3e/d0/d73ed0ce0aa6af8528f411a50abf56e8.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
