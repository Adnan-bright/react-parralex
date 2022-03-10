import React, { useState, useEffect } from 'react'
import * as style from "../../styles/components/aboutUs.module.css";
import { motion } from 'framer-motion'

function AboutUS({ count }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setIndex(count)
  }, [count])

  return (
    <motion.div key={index}
      transition={{ duration: 0.7, easings: "easeInOut" }}
      className={style.main}>
      <motion.div key={index}

        className={style.body}
      >
        <motion.p key={index}
          animate={{
            marginLeft: ['100px', '0px']
          }}
          transition={{ duration: 1.5, easings: "easeInOut" }}
          className={style.title}>About us</motion.p>

        <motion.p
          animate={{
            marginLeft: ['200px', '0px']
          }}
          transition={{ duration: 1, easings: "easeInOut" }}
          className={style.paragraph}>
          We build creative experiences.
          <br />
          As a Dallas based studio that utilizes multiple
          <br />
          disciplines to pioneer new ideas through film,
          <br />
          design, and creative technology.
          <br />
          Our goal is your success.
        </motion.p>
        <div className={style.button}>
          <p className={style.buttonTitle}>Read more</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUS;
