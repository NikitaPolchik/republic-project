import styles from "./Navbar.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  let [visible, setVisible] = useState(false)

  const handleClick = () => {
    setClientWindowHeight(0)
  }
  const handleScroll = () => {
    if (window.innerWidth > 767) {
      setClientWindowHeight(window.scrollY)
      setVisible(clientWindowHeight > window.innerHeight / 2.8)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  });

  return (
    <div onClick={handleClick} className={styles.navbar} style={{ top: visible ? "0vh" : "-20vh" }}>
      <Link href="./about">ABOUT</Link>
      <Link href="./supplycoffee">COFFEE</Link>
      <Link href="./supplytea">TEA</Link>
      <Link href="./coffeemachines">COFFEEMACHINES</Link>
      <Link href="./accessories">ACESSORIES</Link>
      <Link href="./career">CAREER</Link>
      <Link href="./contacts">CONTACTS</Link>
    </div>
  )
}