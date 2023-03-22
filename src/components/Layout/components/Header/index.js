import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO SECTION */}
                <img src={images.logo} alt="Tiktok Icon" />

                {/* SEARCH SECTION */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    {/* Clear logo */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* Loading Logo */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    {/* Search Logo */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* ACTION SECTION */}
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
