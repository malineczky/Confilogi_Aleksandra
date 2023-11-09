import tablet from "../assets/illustration-hero.svg";

function HomeOpening(props) {
    return (
        <>
            <section
                className={`opening content__box ${
                    props.showMenu ? "opening__menu--open" : ""
                }`}
            >
                <div className="opening__graphic graphic">
                    <div></div>
                </div>
                <div className="opening__container container info__box">
                    <div className="opening__content">
                        <h1>A Simple Bookmark Manager</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sunt saepe porro hic voluptatem perferendis!
                            Repudiandae.
                        </p>
                        <div className="opening__buttons">
                            <div className="opening__buttons--btn">
                                <button className="blue__button btn">
                                    <a href="#" className="blue_button--link">
                                        Get it on Chrome
                                    </a>
                                </button>
                            </div>
                            <div className="opening__buttons--btn">
                                <button className="grey__button btn">
                                    Get it on Firefox
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src={tablet}
                            alt="screen"
                            className="opening__image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeOpening;
