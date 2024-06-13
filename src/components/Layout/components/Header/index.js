import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
                    <image href="logo-tiktok.png" width="118" height="42" />
                </svg>
            </div>
            
            <Tippy 
                    visible = {searchResult.length > 0}
                    
                    render={attrs => (
                        
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                           <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem/>   
                            <AccountItem/> 
                            <AccountItem/>   
                            <AccountItem/> 
                            </PopperWrapper>
                        </div>
                        
                    )}
            >
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false}/>
                
                    
                    
                    <button className={cx('seach-btn')}>
                        <FaSearch />
                    </button>
                    
            </div>
            </Tippy>
            <div className={cx('action')}>
                
            </div>
            

        </div>
    </header>;

}

export default Header;