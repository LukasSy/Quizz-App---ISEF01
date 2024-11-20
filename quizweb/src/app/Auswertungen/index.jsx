"use client";
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Auswertungen() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const resultsString = searchParams.get("results");
    const results = resultsString ? JSON.parse(decodeURIComponent(resultsString)) : [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if (currentIndex < results.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    if (!resultsString) {
        return null;
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const totalCorrect = results.filter((result) => result.isCorrect).length;
    const totalIncorrect = results.length - totalCorrect;
    const currentQuestion = results[currentIndex];

    return (
        <div style={styles.page}>
            <h1>Auswertungen</h1>
            <p>
                <strong>Richtig beantwortet:</strong> {totalCorrect} <br />
                <strong>Falsch beantwortet:</strong> {totalIncorrect}
            </p>

            {results.length > 0 && (
                <div style={styles.questionBox}>
                    <h2>
                        Frage {currentIndex + 1} von {results.length}
                    </h2>
                    <p>
                        <strong>Frage:</strong> {currentQuestion.question}
                    </p>

                    <p>
                        <strong>Deine Antwort:</strong> {currentQuestion.selected}{" "}
                        {currentQuestion.isCorrect ? (
                            <span style={styles.correct}>Richtig</span>
                        ) : (
                            <span style={styles.incorrect}>Falsch</span>
                        )}
                    </p>
                    {!currentQuestion.isCorrect && (
                        <p>
                            <strong>Korrekte Antwort:</strong> {currentQuestion.solution}
                        </p>
                    )}

                    <div style={styles.navigationButtons}>
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            style={styles.button}
                        >
                            Zurück
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === results.length - 1}
                            style={styles.button}
                        >
                            Weiter
                        </button>
                    </div>
                </div>
            )}

            <button onClick={() => router.push("/")} style={styles.homeButton}>
                Zurück zur Startseite
            </button>
        </div>
    );
}

const styles = {
    page: {
        padding: "20px",
        textAlign: "center",
    },
    questionBox: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px 0",
        textAlign: "left",
    },
    correct: {
        color: "green",
        fontWeight: "bold",
    },
    incorrect: {
        color: "red",
        fontWeight: "bold",
    },
    navigationButtons: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        cursor: "pointer",
        border: "1px solid #ccc",
    },
    homeButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};