import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1662875668966401.jpeg?x-expires=1679731200&x-signature=c4j%2FVFZTMdr1JkpNUmUtEhXj5Os%3D"
                alt="Khánh Vy Official"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Khánh Vy Official</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>khanhvyccf</span>
            </div>
        </div>
    );
}

export default AccountItem;
