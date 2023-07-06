import TextBlock from "./textblock"
import styles from "./Textblock.module.css"

export default function TextBody() {
  return (
    <div className={styles.wrapper}>
      <div>
        <TextBlock
          caption="COFFEE"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
            Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          mainText="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
           Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          buttonLink="./supplycoffee"
        />
      </div>
      <div>
        <TextBlock
          caption="TEA"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
           Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          mainText="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
           Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          buttonLink="./supplytea"
        />
      </div>
      <div>
        <TextBlock
          caption="COFFEEMACHINES"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
           Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          mainText="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
           Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nemo modi rerum ullam necessitatibus iste nesciunt cum aliquid repudiandae dolore!
            Totam, voluptatem voluptates assumenda ratione earum dignissimos illo alias dolore?"
          buttonLink="./coffeemachines"
        />
      </div>
    </div>
  )
}