import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <a href='/#'>logo</a>
            </div>
            <div className={styles.header_language_switch}>
                <button className='main_btn'>Русский</button>
                <button className='main_btn selected'>English</button>
            </div>
        </header>
    );
};

export default Header;
