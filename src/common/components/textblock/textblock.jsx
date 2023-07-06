import styles from "../textblock/Textblock.module.css"
import Link from "next/link"
export default function TextBlock({ caption, description, mainText, buttonLink }) {
  return (
    <div className={styles.textblock}>
      <div className={styles.caption}>
        <div>
          <img src="https://xn--80ablcnmbe5adjn1av.xn--p1ai/wp-content/uploads/2015/02/011.png" alt="coffee image" />
        </div>
        <div>
          <h3>{caption}</h3>
        </div>
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.mainText}>
        {mainText}
      </div>
      <div className={styles.button}>
        <Link href={buttonLink}>
          <button>MORE INFO</button>
        </Link>
      </div>
    </div>
  )
}