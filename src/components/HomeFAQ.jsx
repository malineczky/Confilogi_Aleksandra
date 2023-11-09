import React from "react";
import FaqQuestion from "./FaqQuestion";

function HomeFAQ() {
    const entries = [
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fuga modi quia natus at ullam id maxime voluptatibus dolores, odio tempora. ",
        },
        {
            question: "How can I request a new browser?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fuga modi quia natus at ullam id maxime voluptatibus dolores, odio tempora. Harum obcaecati libero repellendus esse repellat, deserunt earum amet.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fuga modi quia natus at ullam id maxime voluptatibus dolores, odio tempora. Harum obcaecati libero repellendus esse repellat, deserunt earum amet.Harum obcaecati libero repellendus esse repellat, deserunt earum amet.",
        },
        {
            question: "What about other Chromium browser?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fuga modi quia natus at ullam id maxime voluptatibus dolores.",
        },
    ];

    return (
        <div className="faq mini-container">
            <div className="faq__box mini-container">
                <h2>Frequently Asked Questions</h2>
                <p className="faq__box--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    etiam vulputate, sapien id posuere viverra, ex nulla auctor
                    urna, a sagittis lectus ex eget tortor.
                </p>
            </div>
            <hr />
            {entries.map(({ question, answer }) => (
                <FaqQuestion question={question} answer={answer} />
            ))}
            <button className="blue__button btn faq__btn">
                <a href="#" className="blue__button--link">
                    More info
                </a>
            </button>
        </div>
    );
}

export default HomeFAQ;
