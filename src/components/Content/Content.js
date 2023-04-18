import styles from './Content.module.scss';
import nft from '../../assets/images/nft.jpg';
import discord from '../../assets/images/discord.svg';
import twitter from '../../assets/images/twitter.svg';
import youtube from '../../assets/images/youtube.svg';

const Content = () => {
    return (
        <section className={styles.content}>
            <div className={styles.content_title}>
                <h2>
                    welcome to
                    <p>the training</p>
                </h2>
                <div className={styles.content_blink}></div>
            </div>

            <section className={styles.modules_wrap}>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 1</h4>
                        <h3>NFT Basics</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 2</h4>
                        <h3>Registration for the required services</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 3</h4>
                        <h3>Your First NFT Trade</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 4</h4>
                        <h3>How and where to find a quality project</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 5</h4>
                        <h3>Scam in NFT</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={styles.module}>
                    <div className={styles.module_text}>
                        <h4>Module 6</h4>
                        <h3>Registration for the required services</h3>
                    </div>
                    <div className={styles.module_img}>
                        <img src={nft} alt="nft name" />
                    </div>
                </article>

                <article className={`${styles.module} ${styles.module_with_blink}`}>
                    <div className={`${styles.module_text} ${styles.module_text_no_image}`}>
                        <h4>Module 7</h4>
                        <h3>Influencers</h3>
                        <p>In our final module, we will provide you with links to
                            all useful influencers in the sphere. As well as YouTube
                            channels, discord groups, both paid and free. We recommend
                            you to install Twitter application on your smartphone,
                            and turn on notifications from all Influencers on the list,
                            in order not to miss anything, as well as to watch for updates
                            on YouTube channels and get new information, and of course do not
                            forget about the discord, because there you can find new friends,
                            which will help you in the future!</p>
                    </div>
                    <div className={styles.module_blink}></div>
                </article>

            </section>

            <section className={styles.social_section}>

                <div className={`${styles.social_module} ${styles.discord}`}>
                    <div className={styles.social_module_img}>
                        <img src={discord} alt="discord" />
                    </div>

                    <div className={styles.social_module_text_wrap}>
                        <div className={styles.social_module_text}>
                            <h4>Best free Discord alpha groups</h4>

                            <p>https://discord.gg/flur</p>
                            <p>https://discord.gg/Nfc5YxUz</p>
                            <p>http://discord.com/invite/SJeX7GQJbg</p>
                        </div>

                        <div className={styles.social_module_text}>
                            <h4>Best paid Discord alpha groups</h4>

                            <p>https://discord.gg/flur</p>
                            <p>https://discord.gg/Nfc5YxUz</p>
                            <p>http://discord.com/invite/SJeX7GQJbg</p>
                        </div>
                    </div>

                </div>

                <div className={`${styles.social_module} ${styles.twitter}`}>
                    <div className={styles.social_module_img}>
                        <img src={twitter} alt="twitter" />
                    </div>

                    <div className={styles.social_module_text_wrap}>
                        <div className={styles.social_module_text}>
                            <h4>Useful Twitter Influencers</h4>

                            <p>https://twitter.com/farokh</p>
                            <p>https://twitter.com/takoa__</p>
                            <p>https://twitter.com/ZssBecker</p>
                            <p>https://twitter.com/NonFungies</p>
                            <p>https://twitter.com/TheShamdoo</p>
                            <p>https://twitter.com/allnick</p>
                            <p>https://twitter.com/champtgram</p>
                            <p>https://twitter.com/BAYC2745</p>
                        </div>

                        <div className={styles.social_module_text}>
                            <p>https://twitter.com/ryandcrypto</p>
                            <p>https://twitter.com/PopeyesNFTs</p>
                            <p>https://twitter.com/KosherPlug</p>
                            <p>https://twitter.com/thebrettway</p>
                            <p>https://twitter.com/JRNYcrypto</p>
                            <p>https://twitter.com/AmeerHussainn</p>
                            <p>https://twitter.com/Banks</p>
                            <p>https://twitter.com/OttoSuwenNFT</p>
                        </div>

                        <div className={styles.social_module_text}>
                            <p>https://twitter.com/punk6529</p>
                            <p>https://twitter.com/DonteCrypto</p>
                            <p>https://twitter.com/flurnft</p>
                            <p>https://twitter.com/Zeneca_33</p>
                            <p>https://twitter.com/NFTLlama</p>
                            <p>https://twitter.com/pranksy</p>
                            <p>https://twitter.com/llamaverse_</p>
                            <p>https://twitter.com/nftpasta</p>
                        </div>
                    </div>

                </div>

                <div className={`${styles.social_module} ${styles.youtube}`}>
                    <div className={styles.social_module_img}>
                        <img src={youtube} alt="youtube" />
                    </div>

                    <div className={styles.social_module_text_wrap}>
                        <div className={styles.social_module_text}>
                            <h4>NFT Influencers on YouTube</h4>

                            <p>NFT Nate, ryandcrypto, Alex Becker’s Channel, Donte Walker NFT, The Bitcoin Express,
                                NFT Times, Matt’s Crypto, Sajad, Crypto Brando, Champ Crypto, Popeyes Picks, Brett
                                Malinowski, Sebastian Ghiorghiu</p>
                        </div>
                    </div>

                </div>

            </section>

        </section >
    );
};

export default Content;
