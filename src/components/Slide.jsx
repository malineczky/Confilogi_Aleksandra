function Slide(props) {
    return (
        <div className="slides__tabs tab">
            <div className="tab__img">
                <img
                    src={props.img}
                    alt="screen picture"
                    className="tab__img--img"
                />
            </div>
            <div className="tab__info">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className="tab__buttons">
                    <button className="blue__button btn">
                        <a href="#" className="blue_button--link">
                            More info
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slide;
