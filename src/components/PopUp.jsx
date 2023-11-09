import tab2 from "../assets/illustration-features-tab-2.svg";

function PopUp(props) {
    return props.show ? (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__graphic"></div>
                <div className="popup__img">
                    <img src={tab2} alt="popup image" />
                </div>
                <div className="popup__info">
                    <h2>Speedy Searching</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt saepe porro hic voluptatem perferendis!
                    </p>
                    <button className="blue__button btn short">
                        <a href="#" className="blue_button--link ">
                            More info
                        </a>
                    </button>
                </div>

                <button
                    className="popup__close"
                    onClick={() => {
                        props.setShowPopup(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                    >
                        <path
                            fill="#FFF"
                            fill-rule="evenodd"
                            d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    ) : (
        ""
    );
}

export default PopUp;
