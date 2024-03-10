import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "greenyellow" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "greenyellow" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Logo Designing</h2>
          <p>
            Logo design is the art of crafting a visual representation of a brand, conveying its essence and values through a combination of symbols, colors, and typography. A successful logo is memorable, versatile, and resonates with the target audience.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Designing</h2>
          <p>
          Web design is the practice of planning and creating websites that are both aesthetically pleasing and user-friendly. It involves crafting the visual layout, user interface (UI), and user experience (UX) to ensure visitors can easily find the information they need and have a positive interaction with the website.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-Commerce Site</h2>
          <p>
          E-commerce websites serve as online storefronts, allowing businesses to showcase and sell products directly to customers. These sites typically offer features like product listings, detailed descriptions and images, shopping carts, secure payment gateways, and shipping options, creating a seamless online shopping experience for consumers.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Animated Portfolio</h2>
          <p>
          An animated portfolio is a dynamic showcase of your animation skills and experience, using elements like moving graphics, character animation, or even interactive features to bring your work to life. This visually captivating format can set you apart from the competition and make a lasting impression on potential employers or clients. 
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;