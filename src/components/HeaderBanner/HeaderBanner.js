import styles from './HeaderBanner.module.scss';
import BannerImage from '../../assets/images/header_img.png';
import { useState } from 'react';

const HeaderBanner = () => {
    const [validInput, setValidInput] = useState(true);
    const [validInputText, setValidInputText] = useState('');


    const isInvalid = () => {
        if (validInputText) {
            setValidInput(true);
        } else {
            setValidInput(false);
        }
    }

    return (
        <section className={styles.header_banner}>
            <div className={styles.header_banner_text}>
                <h1>do you want
                    <p>to train with us?</p>
                </h1>
                <div className={styles.header_banner_subscribe}>
                    <div className={styles.header_banner_input}>
                        <input
                            type="text"
                            placeholder='Wallet Address'
                            onChange={(e) => setValidInputText(e.target.value)}
                            onBlur={isInvalid}
                            required={!validInput}
                        />
                        <span>Incorrect Wallet Address</span>
                    </div>
                    <button className={styles.btn_connect_wallet}>Connect Wallet</button>
                </div>
            </div>
            <div className={styles.header_banner_img}>
                <img src={BannerImage} alt="Squirrel" />
                <span className={styles.header_banner_circle_bg}></span>
            </div>
        </section>
    );
};

export default HeaderBanner;
