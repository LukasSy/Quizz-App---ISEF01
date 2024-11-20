// components/BurgerMenu.jsx

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleMenuItemClick = (path) => {
        router.push(path);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div style={styles.burgerMenuContainer}>
            <div
                style={styles.burgerIcon}
                onClick={toggleMenu}>
                <div style={styles.burgerLine}></div>
                <div style={styles.burgerLine}></div>
                <div style={styles.burgerLine}></div>
            </div>
            {menuOpen && (
                <div style={styles.menu}>
                    <ul style={styles.menuList}>
                        <li
                            style={styles.menuItem}
                            onClick={() => handleMenuItemClick("/")}>Home
                        </li>
                        <li
                            style={styles.menuItem}
                            onClick={() => handleMenuItemClick("/Profile")}>Profil
                        </li>
                        <li
                            style={styles.menuItem}
                            onClick={() => handleMenuItemClick("/Test")}>Test
                        </li>
                        <li
                            style={styles.menuItem}
                            onClick={() => handleMenuItemClick("/Testpage")}>Testpage
                        </li>
                        <li
                            style={styles.menuItem}
                            onClick={() => handleMenuItemClick("/Auswertungen")}>Auswertungen (später unsichtbar)
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
const styles = {
    burgerMenuContainer: {
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 1000,
    },
    burgerIcon: {
        cursor: "pointer",
        width: "30px",
        height: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    burgerLine: {
        height: "5px",
        backgroundColor: "black",
        borderRadius: "5px",
    },
    menu: {
        position: "absolute",
        top: "40px",
        left: "0",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        width: "200px",
        zIndex: 999,
    },
    menuList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    menuItem: {
        padding: "10px",
        cursor: "pointer",
        borderBottom: "1px solid #eee",
    },
    menuItemHover: {
        backgroundColor: "white",
    },
};
export default BurgerMenu;