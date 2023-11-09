import React, { useState } from "react";
import FormCounter from "./FormCounter";
import iconError from "../assets/icon-error.svg";

function HomeForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError("");
    };

    const handleSubscribe = () => {
        if (!email.includes("@") || email.trim() === "") {
            setError("Whoops, that's not an email");
        } else {
            // click logic
        }
    };

    return (
        <div className="form">
            <div className="form__container">
                <div className="mini-container">
                    <p className="form__header">
                        <FormCounter />
                    </p>
                    <h2 className="form__title">
                        Stay up-to-date with what
                        <span className="form__span"> we're doing</span>
                    </h2>
                    <div className="form__box">
                        <div className="error__box">
                            <input
                                className={`form__box--input${
                                    error ? " input__error" : ""
                                }`}
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                                onKeyDown={(e) => {
                                    handleSubscribe();
                                }}
                            />
                            {error && (
                                <div className="form__error">
                                    <p className="form__error--info">{error}</p>
                                    <img
                                        src={iconError}
                                        alt="error icon"
                                        className="form__error--icon"
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            className={`red__button form__btn btn${
                                error ? " error" : ""
                            }`}
                            onClick={handleSubscribe}
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeForm;
