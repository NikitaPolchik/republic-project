import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../dropDownMenu/DropDownMenu.module.css"
import Link from "next/link"
import { useState } from "react"


export default function DropDownMenu() {

  const [dropDownVisible, setDropDownVisible] = useState(false)
  const handleClick = () => {
    setDropDownVisible(!dropDownVisible)
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
        <div className={styles.dropDownMenu} style={{ display: dropDownVisible ? "flex" : "none" }}>
          <Link href="./about">ABOUT</Link>
          <Link href="./supplycoffee">COFFEE</Link>
          <Link href="./supplytea">TEA</Link>
          <Link href="./coffeemachines">COFFEEMACHINES</Link>
          <Link href="./accessories">ACESSORIES</Link>
          <Link href="./career">CAREER</Link>
          <Link href="./contacts">CONTACTS</Link>
        </div>
      </div>
    </>
  )
}