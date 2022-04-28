import styles from './Content.module.scss';
import nft from '../../assets/images/nft.jpg';

const Content = () => {
    return (
        <section className={styles.content}>
            <h2>
                welcome to
                <p>the training</p>
            </h2>

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

                <article className={styles.module}>
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
                </article>

            </section>

            <section className={styles.social_section}>
                
            </section>

        </section>
    );
};

export default Content;
