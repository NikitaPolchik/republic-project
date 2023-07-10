import styles from "../header/Header.module.css"
import Link from "next/link"
import DropDownMenu from "../dropDownMenu/dropDownMenu"

export default function RepublicHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.firstmenu}>
          <Link href="./about">ABOUT</Link>
          <Link href="./supplycoffee">COFFEE</Link>
          <Link href="./supplytea">TEA</Link>
          <Link href="./coffeemachines">COFFEEMACHINES</Link>
          <Link href="./accessories">ACESSORIES</Link>
        </div>
        <div className={styles.secondmenu}>
          <Link href="./career">CAREER</Link>
          <Link href="./contacts">CONTACTS</Link>
        </div>
      </div>
      <Link className={styles.imageLink} href="/">
        <img className={styles.image} src="https://xn--80ablcnmbe5adjn1av.xn--p1ai/wp-content/uploads/2015/03/roc1999slogan2.png" alt="Republic of coffe.img" />
      </Link>
      <DropDownMenu />
    </div>

  )
}