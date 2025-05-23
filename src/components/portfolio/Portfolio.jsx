import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Swap Dex App",
    img: "/dexThumb.png",
    desc: "A dex app that swaps tokens with their respective live prices using the moralis api and 1inch Aggregator",
    href: "https://swap-dex-q24w.vercel.app/",
  },
  {
    id: 2,
    title: "Termina Defi",
    img: "/terminaThumb.png",
    desc: " Simple Defi with Gas Abstraction",
    href: "https://termina.fun/",
  },
  {
    id: 3,
    title: "Ecommerce Yonder",
    img: "/yondercommThumb.png",
    desc: "A fulstack ecommerce app with a custom backend and stripe payment integration",
    href: "https://yondercomm-sales.onrender.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <Link to={item.href}>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
