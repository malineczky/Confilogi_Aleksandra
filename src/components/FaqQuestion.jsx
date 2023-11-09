import React, { useState } from "react";
import arrow from "../assets/icon-arrow.svg";

function FaqQuestion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="question">
            <p className="faq__question" onClick={toggleAnswer}>
                <span className="faq__question--question">
                    {props.question}{" "}
                </span>
                <span className="arrow">
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                        >
                            <path
                                fill="none"
                                stroke-width="3"
                                d="M1 1l8 8 8-8"
                                className="arrow__up"
                            />
                        </svg>
                    ) : (
                        <img src={arrow} className="arrow__down" />
                    )}
                </span>
            </p>
            {isOpen && <p className="faq__answer">{props.answer}</p>}
            <hr />
        </div>
    );
}

export default FaqQuestion;
