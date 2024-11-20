import React from "react";
import Link from "next/link";
import { FaUser, FaMasksTheater,FaUserGroup, FaCode  } from "react-icons/fa6";
const Home = () => {
  return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>Quiz</h1>
            <h2 style={styles.subtitle}>Start</h2>
          </div>
          <div style={styles.separator}></div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <div style={styles.iconWrapper}>
                <FaUser style={styles.icon}/>
                <div style={styles.textWrapper}>
                  <Link href="/Einzelspieler" style={styles.link}>
                    Einzelspieler
                  </Link>
                  <p style={styles.smallText}> Spiele alleine das Quiz</p>
                </div>
              </div>
            </li>

            <li style={styles.listItem}>
              <div style={styles.iconWrapper}>
                <FaUserGroup style={styles.icon}/>
                <div style={styles.textWrapper}>
                  <Link href="/Mehrspieler" style={styles.link}>
                    Mehrspieler
                  </Link>
                  <p style={styles.smallText}> Finde einen Gegenspieler</p>
                </div>
              </div>
            </li>

            <li style={styles.listItem}>
              <div style={styles.iconWrapper}>
                <FaMasksTheater style={styles.icon}/>
                <div style={styles.textWrapper}>
                  <Link href="/Turnier" style={styles.link}>
                    Turnier
                  </Link>
                  <p style={styles.smallText}>Tritt gegen andere an</p>
                </div>
              </div>
            </li>

            <li style={styles.listItem}>
              <Link href="/Test" style={styles.link}>
                Test
              </Link>
            </li>

            <li style={styles.listItem}>
              <Link href="/testpage" style={styles.link}>
                Testpage
              </Link>
            </li>

            <div style={styles.separator}></div>
            <li style={styles.listItem}>
              <Link href="/Auswertungen" style={styles.link}>
                Auswertungen (später unsichtbar)
              </Link>
            </li>
            <li style={styles.listItem}>
              <div style={styles.iconWrapper}>
                <FaCode style={styles.icon}/>
                  <Link href="/Test" style={styles.link}>
                    Einstellungen
                  </Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
  );
};

const styles = {
  page: {
    backgroundColor: "white",
    color: "black",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    boxSizing: "border-box",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",

  },
  icon: {
    marginRight: "10px",
    fontSize: "1.5rem",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  smallText:{
    fontSize: "14px",
    color: "lightgray",
    marginTop: "-5px",
  },
  separator: {
    height: "2px",
    backgroundColor: "lightgray",
    margin: "20px 0",
  },
  container: {
    border: "1px solid grey",
    padding: "20px",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  titleContainer: {
    textAlign: "left",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "black",
    margin: "0",
  },
  title: {
    fontSize: "16px",
    color: "gray",
    marginTop: "5px",
    marginBottom:"-10px"
  },
  list: {
    listStyleType: "none",
    paddingTop: "0",
    marginTop: "0",
    textAlign:"left"
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "black",
    fontSize: "18px",
  },
};

export default Home;
