import React from "react";

const StatusBar = ({ progress }) => {
    return (
        <div style={styles.container}>
            <div style={{ ...styles.bar, width: `${progress}%` }}></div>
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        height: "20px",
        backgroundColor: "#e0e0df",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
    },
    bar: {
        height: "100%",
        backgroundColor: "#4caf50",
        transition: "width 0.3s ease-in-out",
        borderRadius: "10px 0 0 10px",
    },
};

export default StatusBar;
