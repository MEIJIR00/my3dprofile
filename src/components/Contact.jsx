import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h3 className={`${styles.heroSubText}`}>Meliya</h3>
        <p>Bengaluru, Karnataka</p>
        <p>Website: <a href="https://github.com/MEIJIR00">My Githhub Repositary</a></p>
        <p>Phone Number: +91 8388077987</p>
          <p>email: meijirooart@gmail.com</p>
        
        
        <div className="flex flex-row justify-between">
          <a href="https://www.instagram.com/meijiroo/" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.linkedin.com/in/meliya-subba-752843219/" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://x.com/MEIJIR00" target="_blank"><img src="icons/twitter.svg" className="mt-2 h-10 v-10" /></a>
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")