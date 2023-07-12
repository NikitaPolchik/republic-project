import HeadComponent from "../headComponent/headComponent"
import RepublicHeader from "../header/header"
import BackgroundImage from "../backgroundimage/backgroundImage"
import Footer from "../footer/footer"
import styles from "./Layout.module.css"
import Navbar from "../navbar/navbar"
import TextBody from "../textblock/textbody"
import CertificatesBlock from "../certificate/certificatesBlock"

export default function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <div className={styles.wrapper}>
        <Navbar />
        <RepublicHeader />
        <BackgroundImage />
      </div>
      <main>{children}</main>
      <TextBody />
      <CertificatesBlock />
      <Footer />
    </>
  )
}