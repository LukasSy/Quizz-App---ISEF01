"use client";

import React from "react";

export default function Turnier() {
    return (
        <div style={styles.container}>
            {/* Profilbild und Name */}
            <div style={styles.profileHeader}>
                <div style={styles.avatar}>
                    <span style={styles.avatarText}>LA</span>
                </div>
                <div style={styles.profileInfo}>
                    <h1 style={styles.username}>Lukas Arent</h1>
                    <p style={styles.email}>Lukas.Arent@example.com</p>
                </div>
            </div>

            {/* Weitere Profilinformationen */}
            <div style={styles.profileDetails}>
                <h2>Profildetails</h2>
                <p><strong>Geburtstag:</strong> 1. Dezember 2001</p>
                <p><strong>Standort:</strong> Bielefeld, Deutschland</p>
                <p><strong>Biografie:</strong> Dies ist eine Profilbeschreibung</p>
            </div>

            {/* Button zur Bearbeitung */}
            <button style={styles.editButton}>Profil bearbeiten</button>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
    },
    profileHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    avatar: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        marginRight: "20px",
    },
    avatarText: {
        margin: 0,
    },
    profileInfo: {
        flex: 1,
    },
    username: {
        margin: 0,
        fontSize: "24px",
        fontWeight: "bold",
    },
    email: {
        margin: "5px 0",
        fontSize: "16px",
        color: "gray",
    },
    profileDetails: {
        backgroundColor: "lightgray",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
    },
    editButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};
