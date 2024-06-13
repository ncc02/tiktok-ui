import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7iPxccDqUYiOg2HRgT-7u-6dT1bXrcZD2A&s" 
                alt="Hoaa">

            </img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>Elon Musk
                    
                </h4>
                <span className={cx('username')}>elon_musk</span>
            </div>
        </div>
     )
}

export default AccountItem;