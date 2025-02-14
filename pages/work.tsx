import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import { projects } from "@data/projects";
import Heading from "@components/Heading";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MetaTags from "@components/MetaTags";
import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";



const Work = ({ translate }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      <MetaTags title="Proyectos" />
      {translate === "en" ? (
        <section className="dark:bg-dark-theme relative overflow-hidden min-h-screen flex items-center py-28">
          <div className="max-w-screen-lg mx-auto w-full px-2">
            <Heading heading="Diseños" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map(({ id, name, img, linkToPage, linkToSrc }) => (
                <motion.div variants={itemSlideUp} key={id}>
                  <Link href={`/details/${id}`}>
                    <a>
                      <Image
                        src={img}
                        width={345}
                        height={216}
                        layout="responsive"
                        className="rounded"
                        alt="work"
                      />
                    </a>
                  </Link>
                  <div style={{}} className="mt-4 flex justify-between items-center">
                    <h4 className="font-main text-md font-bold capitalize dark:text-gray-100">
                      {name}
                    </h4>
                    <div className="flex space-x-4 dark:text-gray-100">
                      <a
                        href={linkToPage}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="w-4"
                          icon={faExternalLinkAlt}
                        />
                      </a>
                      <a
                        href={linkToSrc}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon className="w-4" icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {showButton && (
            <button
              onClick={scrollToTop}
              className="back-to-top"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                fontSize: "100px",
                color: "white",
                cursor: "pointer",
                borderRadius: "50%", /* Cambiar a 50% para hacerlo circular */
                border: "none",
                transition: "transform 0.2s",
                background: "#0ee0b9",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <FontAwesomeIcon
                className="w-4"
                icon={faArrowUp}
              />
            </button>
          )}

          {/* &#8679; is used to create the upward arrow */}
        </section>) : (
        <section className="dark:bg-dark-theme relative overflow-hidden min-h-screen flex items-center py-28">
          <div className="max-w-screen-lg mx-auto w-full px-2">
            <MetaTags title="Projects" />
            <Heading heading="Designs " />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map(({ id, name, img, linkToPage, linkToSrc }) => (
                <motion.div variants={itemSlideUp} key={id}>
                  <Link href={`/details/${id}`}>
                    <a>
                      <Image
                        src={img}
                        width={345}
                        height={216}
                        layout="responsive"
                        className="rounded"
                        alt="work"
                      />
                    </a>
                  </Link>
                  <div style={{}} className="mt-4 flex justify-between items-center">
                    <h4 className="font-main text-md font-bold capitalize dark:text-gray-100">
                      {name}
                    </h4>
                    <div className="flex space-x-4 dark:text-gray-100">
                      <a
                        href={linkToPage}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="w-4"
                          icon={faExternalLinkAlt}
                        />
                      </a>
                      <a
                        href={linkToSrc}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon className="w-4" icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {showButton && (
            <button
              onClick={scrollToTop}
              className="back-to-top"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                fontSize: "100px",
                color: "white",
                cursor: "pointer",
                borderRadius: "50%", /* Cambiar a 50% para hacerlo circular */
                border: "none",
                transition: "transform 0.2s",
                background: "#0ee0b9",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

              }}

            >
              <FontAwesomeIcon
                className="w-4"
                icon={faArrowUp}
              />
            </button>
          )}

          {/* &#8679; is used to create the upward arrow */}
        </section>)}
    </>
  );
};

export default Work;
