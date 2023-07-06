import styles from "./Certificate.module.css"

export default function Certificate({ imageSource, imageDescription, headerText, bodyText }) {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={imageSource} alt={imageDescription} />
        <div className={styles.text}>
          <h1>{headerText}</h1>
          <h2>{bodyText}</h2>
        </div>
      </div>
    </>
  )
}