import React, { useState, useEffect } from "react";
import ProgressBar from "."; // StatusBar-Komponente wird importiert

const ProgressWrapper = ({ step }) => {
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        if (step < 0 || step > 10) {
            console.error("Parameter 'step' muss zwischen 0 und 10 liegen.");
            return;
        }

        setProgress((prev) => {
            const newProgress = (step/10) * 100;
            return newProgress > 100 ? 100 : newProgress;
        });
    }, [step]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Frage {step} von 10</h1>
            <ProgressBar progress={progress} />
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        marginBottom: "20px",
    },
};

export default ProgressWrapper;
