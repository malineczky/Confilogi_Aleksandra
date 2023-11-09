import React, { useState, useEffect } from "react";

function FormCounter() {
    const [count, setCount] = useState(35000);

    useEffect(() => {
        let startTime = Date.now();
        let animationFrameId;

        function updateCount() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const newCount = 35000 - Math.floor((elapsedTime / 20000) * 35000);

            if (newCount <= 0) {
                setCount(0);
                cancelAnimationFrame(animationFrameId);
            } else {
                setCount(newCount);
                animationFrameId = requestAnimationFrame(updateCount);
            }
        }
        animationFrameId = requestAnimationFrame(updateCount);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <p className="form__header">{count}+ ALREADY JOINED</p>;
}

export default FormCounter;
