import MetaTags from "@components/MetaTags";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "@helpers/animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";



const About = ({ translate }) => {
  const skills = [
    "Html/Css",
    "Javascript",
    "Moodle",
    "WordPress",
    "PHP",
    "Xampp",
    "MySQL",
    "Excel",
    "GitHub"
  ];
  return (
    <>
     <MetaTags title="Sobre mí" />
    {translate === "en" ? (
     
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="sm:text-7xl text-5xl font-main dark:text-gray-100 font-black uppercase mb-12 xl:mb-0"
          >
            Sobre <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block w-32  mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-full w-16 h-4 bg-primary"
              ></motion.span>
            </motion.span>
            Mí
          </motion.h1>
          <div>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="text-main font-semibold text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6"
              style={{ textAlign: "justify" }}
            >
              ¡Hola! Soy Geral, una desarrolladora web con experiencia en el diseño, soporte técnico y administración web. He trabajado en empresas
              como Fauna Diversidad Digital y Soy Digital, donde he participado en proyectos importantes para identidades reconocidas como la EPS Sura y marcas icónicas como Coca-Cola,
              y he adquirido habilidades valiosas en áreas como gestión de proyectos, análisis de datos y optimización de la experiencia de usuario.
              <br /><br></br>
              <a
                    href="https://drive.google.com/file/d/1sb0-OQS-8PgubcKp3YJqXxcKuTPlXgwZ/view" download="CV" 
                    rel="noopener noreferrer"
                    
                    target="_blank"
                    className="mr-4 hover:text-primary flex items-center space-x-2"
                  >
                    <h3>Visitar CV</h3>
                    <FontAwesomeIcon className="w-4" icon={faExternalLinkAlt} />
                  </a>
              <br />
              
            </motion.p>
          
            
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="text-3xl font-main font-black uppercase mb-6 dark:text-gray-100"
            >
              Mis habilidades :
            </motion.h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4 "
            >
              {skills.map((skill, i) => (
                <motion.li
                  variants={item}
                  key={`${skill}-${i}`}
                  className="text-main text-xl text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>) :  ( 
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
        <MetaTags title="About me" />
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="sm:text-7xl text-5xl font-main dark:text-gray-100 font-black uppercase mb-12 xl:mb-0"
          >
            About <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block w-32  mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-full w-16 h-4 bg-primary"
              ></motion.span>
            </motion.span>
            me
          </motion.h1>
          <div>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="text-main font-semibold text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6"
              style={{ textAlign: "justify" }}
            >
              Hello! I'm Geral, a web developer with experience in design, technical support and web administration. I have worked in companies such as Fauna Diversidad Digital and Soy Digital, where I have participated in important projects for recognized identities such as EPS Sura and iconic brands like Coca-Cola, and I have acquired valuable skills in areas such as project management, 
              data analysis and user experience optimization.
              <br /><br></br>
              <a
                    href="https://drive.google.com/file/d/1tOHhJEZQdzqVFt1EfZE-hccM9YpcnJbi/view?usp=sharing" download="CV" 
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mr-4 hover:text-primary flex items-center space-x-2"
                  >
                    <h3>Visit CV</h3>
                    <FontAwesomeIcon className="w-4" icon={faExternalLinkAlt} />
                  </a>
              <br />
              
            </motion.p>
          
            
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="text-3xl font-main font-black uppercase mb-6 dark:text-gray-100"
            >
              My skills :
            </motion.h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4 "
            >
              {skills.map((skill, i) => (
                <motion.li
                  variants={item}
                  key={`${skill}-${i}`}
                  className="text-main text-xl text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>)}
    </>
  );
};

export default About;
