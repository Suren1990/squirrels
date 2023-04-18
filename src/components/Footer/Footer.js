import styles from './Footer.module.scss';
import discordIcon from '../../assets/images/discord_icon.svg';
import twitterIcon from '../../assets/images/twitter_icon.svg';
import instagramIcon from '../../assets/images/instagram_icon.svg';
//import fotterImg from '../../assets/images/footer_img.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* <div className={styles.footer_img}>
                <img src={fotterImg} alt="Squirrel with mask" />
            </div> */}
            <div className={styles.footer_inner_wrap}>
                <div className={styles.footer_inner}>
                    <div className={styles.footer_logo}>
                        <a href='/#'>Logo</a>
                    </div> 
                    <div className={styles.footer_community}>
                        <h4>join the community</h4>
                        <div className={styles.social_community}>
                            <a href="/#">
                                <img src={discordIcon} alt='discord icon'/>
                            </a>
                            <a href="/#">
                                <img src={twitterIcon} alt='twitter icon'/>
                            </a>
                            <a href="/#">
                                <img src={instagramIcon} alt='instagram icon'/>
                            </a>
                        </div>
                        <button className={styles.btn_join}>Join Discord</button>
                    </div>
                </div>
                <div className={styles.footer_copyright}>Copyright © 2022 Dabookie. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
