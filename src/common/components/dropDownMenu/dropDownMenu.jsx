import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import styles from "./DropDownMenu.module.css"
import Link from "next/link"
import { useState } from "react"


export default function DropDownMenu() {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const handleClick = () => {
    setDropDownVisible(!dropDownVisible)
    console.log("clicked");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.dropDownMenuButton} onClick={handleClick}>
          <div>
            MENU
          </div>
          <div className={styles.dropDownMenuIcon}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className={styles.dropDownMenu}>
          <Link href="./about" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>ABOUT</Link>
          <Link href="./supplycoffee" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>COFFEE</Link>
          <Link href="./supplytea" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>TEA</Link>
          <Link href="./coffeemachines" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>COFFEEMACHINES</Link>
          <Link href="./accessories" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>ACESSORIES</Link>
          <Link href="./career" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>CAREER</Link>
          <Link href="./contacts" style={{
            color: dropDownVisible ? "rgb(var(--header-text-rgb)" : "",
            height: dropDownVisible ? "5vh" : "0vh",
            padding: dropDownVisible ? "0vh" : "0vh",
            zIndex: dropDownVisible ? "1" : "-1"
          }}>CONTACTS</Link>
        </div>
      </div>
    </>
  )
}