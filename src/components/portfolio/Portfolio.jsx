import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { href, Link } from "react-router-dom";

const items = [
  {
    id: 2,
    title: "Ecommerce Yonder",
    img: "/yondercommThumb.png",
    desc: "A fulstack ecommerce app with a custom backend and stripe payment integration",
    href: "https://yondercomm-sales.onrender.com/",
  },
  {
    id: 0,
    title: "Swap Dex App",
    img: "/dexThumb.png",
    desc: "A dex app that swaps tokens with their respective live prices using the moralis api and 1inch Aggregator",
    href: "https://swap-dex-q24w.vercel.app/",
  },
  {
    id: 1,
    title: "AI-SaaS",
    img: "/aisaas.png",
    desc: "A SaaS platform that provides AI-powered solutions for learning and development and content generation. Using OpenAI's Api, clerk, dtripe, and more.",
    href: "https://ai-saa-s-three.vercel.app/",
  },
  {
    id: 3,
    title: "Cross Credit",
    img: "/crosscredit.png",
    desc: "A decentralized lending platform that enables users to lend, borrow, and manage positions across multiple blockchain networks using smart contracts and cross-chain messaging. Using Moralis, Solidity, Chainlink and more.",
    href: "ccl-frontend-ten.vercel.app",
  },
  {
    id: 4,
    title: "Termina Defi",
    img: "/terminaThumb.png",
    desc: " Simple Defi with Gas Abstraction. It allows users to deposit, withdraw, and transfer tokens using a simple interface. It uses the Moralis API for blockchain interactions and supports multiple networks.",
    href: "https://termina.fun/",
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
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="see-demo-btn"
            >
              See Demo
            </a>
          </motion.div>
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
    stiffness: 0,
    damping: 0,
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
