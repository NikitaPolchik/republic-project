import styles from "./Certificate.module.css"
import Certificate from "./certificate"

export default function CertificatesBlock() {
  return (
    <div className={styles.certificatesWrapper}>
      <Certificate
        imageSource="https://xn--80ablcnmbe5adjn1av.xn--p1ai/wp-content/uploads/2015/02/867519228d1d5325856fc61d710ded0e_S.jpg"
        imageDescription="certificate img"
        headerText="MADE IN ITALY"
        bodyText="100% Certificate" />
      <Certificate
        imageSource="https://xn--80ablcnmbe5adjn1av.xn--p1ai/wp-content/uploads/2015/03/eco.png"
        imageDescription="second certificate img"
        headerText="ECOLOGICAL ROASTING"
        bodyText="The ecological roasting system" />
    </div>
  )
}