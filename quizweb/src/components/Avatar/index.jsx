import React from 'react';
import { useRouter } from "next/navigation";
const Avatar=()=>{
    const router = useRouter();
    const handleAvatarClick = () => {
        router.push("/Profile");
    };

    return (
        <div style={styles.avatarContainer} onClick={handleAvatarClick}>
        <div style={styles.avatar}>
            <span style={styles.avatarText}>LA</span>
        </div>
    </div>)
}

const styles = {
    avatarContainer: {
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
    },
    avatar: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        cursor:"pointer"
    },
    avatarText: {
        margin: 0,
    },
};


export default Avatar;