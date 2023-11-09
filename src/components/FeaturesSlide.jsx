import React, { useState } from "react";
import Slide from "./Slide";
import tab1 from "../assets/illustration-features-tab-1.svg";
import tab2 from "../assets/illustration-features-tab-2.svg";
import tab3 from "../assets/illustration-features-tab-3.svg";

function FeaturesSlide() {
    const content = [
        {
            image: tab1,
            title: "Simple Bookmarking",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab, quaerat minima vel ipsum, expedita dicta! Deleniti, eum.",
        },
        {
            image: tab2,
            title: "Speedy Searching",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab.",
        },
        {
            image: tab3,
            title: "Easy Sharing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab, quaerat minima vel ipsum, expedita dicta!",
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className="slides__conatiner container">
                <div className="slides__buttons">
                    <button
                        className={`slides__buttons--btn ${
                            activeTab === 0 ? "active" : ""
                        }`}
                        onClick={() => handleTabChange(0)}
                    >
                        Simple Bookmarking
                    </button>
                    <button
                        className={`slides__buttons--btn ${
                            activeTab === 1 ? "active" : ""
                        }`}
                        onClick={() => handleTabChange(1)}
                    >
                        Speedy Searching
                    </button>
                    <button
                        className={`slides__buttons--btn ${
                            activeTab === 2 ? "active" : ""
                        }`}
                        onClick={() => handleTabChange(2)}
                    >
                        Easy Sharing
                    </button>
                </div>
                <Slide
                    img={content[activeTab].image}
                    title={content[activeTab].title}
                    text={content[activeTab].text}
                />
            </div>
        </>
    );
}

export default FeaturesSlide;
