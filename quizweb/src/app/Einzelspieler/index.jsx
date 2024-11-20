"use client";

import React, { useEffect, useState } from "react";
import { fetchQuestion } from "@/app/Einzelspieler/testAPI.js";
import { useRouter } from "next/navigation";
import ProgressWrapper from "@/components/ProgressBar/progressWrapper";

export default function Einzelspieler() {
    const [question, setQuestion] = useState(null);
    const [selected, setSelected] = useState(null);
    const [index, setIndex] = useState(1);
    const [results, setResults] = useState([]);
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    const loadQuestion = async () => {
        try {
            const data = await fetchQuestion();
            setQuestion(data);
            setSelected(null);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadQuestion();
    }, []);

    const handleConfirm = () => {
        if (index >= 10) {
            setProgress(10)
            setTimeout(() => {
                const resultsString = JSON.stringify(results);
                const encodedResults = encodeURIComponent(resultsString);
                router.push(`/Auswertungen?results=${encodedResults}`);
            }, 1000);
            return;

        }

        if (question) {
            const isCorrect = selected === question[question.solution];

            const newResult = {
                question: question.question,
                selected,
                isCorrect,
                solution: question[question.solution],
            };

            setResults((prevResults) => [...prevResults, newResult]);
            setIndex((prevIndex) => prevIndex + 1);
            setProgress(progress+1);
            loadQuestion();
        }
    };

    if (!question) {
        return <div style={styles.loading}>Lade Frage...</div>;
    }

    return (
        <div style={styles.page}>
            <div style={styles.box}>
                <h1 style={styles.title}>
                    {"Frage " + index + ": " + question.question}
                </h1>
                <div style={styles.innerBox}>
                    {[question.answer1, question.answer2, question.answer3, question.answer4].map(
                        (answer, idx) => (
                            <label key={idx} style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="options"
                                    value={answer}
                                    checked={selected === answer}
                                    onChange={() => setSelected(answer)}
                                    style={styles.radioButton}
                                />
                                {answer}
                            </label>
                        )
                    )}
                    <button
                        style={styles.button}
                        onClick={handleConfirm}
                        disabled={!selected}
                    >
                        Bestätigen
                    </button>
                </div>
            </div>

            <div style={styles.progressContainer}>
                <ProgressWrapper step={progress} />
            </div>
        </div>
    );
}

const styles = {
    page: {
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
    },
    box: {
        border: "1px solid grey",
        padding: "20px",
        borderRadius: "5px",
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
    },
    title: {
        marginBottom: "20px",
        fontSize: "1.5rem",
    },
    innerBox: {
        marginTop: "20px",
        border: "1px solid grey",
        padding: "15px",
        borderRadius: "5px",
        width: "100%",
        textAlign: "left",
    },
    radioLabel: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        fontSize: "1rem",
    },
    radioButton: {
        marginRight: "10px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        width: "100%",
    },
    progressContainer: {
        marginTop: "20px",
        width: "100%",
        maxWidth: "500px",
    },
    loading: {
        fontSize: "1.5rem",
        color: "black",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "5px",
    },
};
