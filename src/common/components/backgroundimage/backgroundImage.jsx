import styles from "../backgroundimage/BackgroundImage.module.css"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import imageback from "@/public/ROCimage.png"

export default function BackgroundImage() {
  return (
    <Parallax translateY={[45, -30]}>
      <div className={styles.backgroundImage}>
        <Image
          className={styles.image}
          src={imageback}
          alt="background image"
        />
      </div>
    </Parallax>
  )
}


