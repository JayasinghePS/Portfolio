import React, { useEffect, useRef, useState } from 'react'
import "./Projects.css"
import { projects } from "../../data/data.js"
import * as motion from "motion/react-client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiPytorch, SiPython, SiNextdotjs, SiTailwindcss, SiVercel, SiGooglecloud, SiReact, SiNodedotjs, SiSpringboot, SiJava, SiMysql, SiCss3, SiAngular, SiExpress, SiMongodb, SiSocketdotio} from "react-icons/si";

export const techStackIcons = [
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
];

function Projects() {

  const [projectIndex, setProjectIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const [hoverEnabled, setHoverEnabled] = useState(true);


  const projectListRef = useRef(null);

  const selectTheProject = (index)=>{
    setProjectIndex(index);
    setSelectedImage(1); // reset to first image when selecting a new project
  };

   // ✅ count how many images this project actually has
  const getImageCount = () => {
    let count = 0;
    //can use 'projects[projectIndex][`img_${x}`]' this too, but avoids crash if projectIndex invalid
    while (projects?.[projectIndex]?.[`img_${count + 1}`]) {
      count++;
    }
    return count;
  };

  const previousImage = () => {
    const totalImages = getImageCount();
    const newIndex = selectedImage - 1;
    if (newIndex < 1) {
      setSelectedImage(totalImages); // wrap to last image
    } else {
      setSelectedImage(newIndex);
    }
  };

  const nextImage = () => {
    const totalImages = getImageCount();
    const newIndex = selectedImage + 1;
    if (newIndex > totalImages) {
      setSelectedImage(1); // wrap to first image
    } else {
      setSelectedImage(newIndex);
    }
  };

  useEffect(() => {
    const el = projectListRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();         // prevent vertical scroll
      el.scrollLeft += e.deltaY;  // move horizontally
    };

    el.addEventListener('wheel', onWheel);
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  
  return (
    <>
    <section className='projects'>
  
    <div className='project-area'>
    
    <div className='project-area-left'>
    <div className='lefttop-topic'>
     <h1 className='project-title'>Projects</h1>
     <p>Welcome to my project space - a collection of ideas brought to life through code, design, and experimentation. Here you’ll find everything from research-driven builds to practical tools, each created to challenge my skills and explore new possibilities in technology.jdhfhhfdjhjdhfudjkfhui</p>
    </div>
    <div className='leftbottom-allprojects'>
    <div className='projectlist' ref={projectListRef}>
      {projects.map((item, index) => (
              <motion.div  className='box' key={index} 
              whileHover={{ scale: 1.08}}
              whileTap={{ scale: 0.95 }} 
              onMouseEnter={() => {
              if (hoverEnabled) selectTheProject(index);
              }}
              onClick={() => {
                selectTheProject(index);
                setHoverEnabled(false); // disable hover after clicking
              }} 
               transition={{ type: "spring", stiffness: 300, damping: 15 }}
               >
                <img src={item.img_1} alt='not showing' />
                    <h5>{item.name}</h5>                
              </motion.div>
            ))}
    </div>
    </div>
    </div>

    <div className='right-selectedproject'>
    <div className='selectedproject'>
      <div className='selectedproject-images'>
        <button className='img-btn left-btn' onClick={() => previousImage()}><ChevronLeft className="arrow-icon" size={28}/></button>
        <button className='img-btn right-btn' onClick={() => nextImage()}><ChevronRight className="arrow-icon" size={28}/></button>
        {/* <img src={projects[projectIndex][`img_${selectedImage}`]} alt='not showing' /> */}

        {/* parallax layers container */}
        <div className="parallax-wrapper">

          {/* slopeBegin layer */}
          {/* <motion.div
            className="slopeBegin"
            animate={{ x: [ -50, 0 ], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={`begin-${selectedImage}`}
          /> */}

          {/* main image */}
          <motion.img
            key={selectedImage}
            src={projects[projectIndex][`img_${selectedImage}`]}
            alt="not showing"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="main-image"
          />

          {/* slopeEnd layer */}
          <motion.div
            className={`slopeEnd ${selectedImage % 2 === 0 ? 'teal' : 'purple'}`}
            animate={{ x: [50, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={`end-${selectedImage}`}
          />
           {/* <motion.div
            className={`slopeEnd2 ${selectedImage % 2 === 0 ? 'teal' : 'pink'}`}
            animate={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={`end-${selectedImage}`}
          /> */}
          

          {/* slopeBeginlayer */}
          <motion.div
            className={`slopeBegin ${selectedImage % 2 === 0 ? 'purple' : 'teal'}`}
            animate={{ x: [ -50, 0 ], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={`begin-${selectedImage}`}
          />
          
          {/* number layer */}
          <motion.div
            className="number-layer"
            key={`num-${selectedImage}`}
            initial={{ y: 50, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span>{String(selectedImage).padStart(2, '0')}</span>
          </motion.div>
        </div>

        <div className="image-dots">
          {Array.from({ length: getImageCount() }, (_, i) => (
            <span
              key={i}
              className={`dot ${selectedImage === i + 1 ? "active" : ""}`}
              onClick={() => setSelectedImage(i + 1)}
            ></span>
          ))}
        </div>
               
      </div>
      <div className='selectedprojectbelowarea'>
      <div className='selectedproject-namedescription'> 
       <h3>{projects[projectIndex].name}</h3>  
       <p>{projects[projectIndex].description}</p>
      </div>
      <div className='selectedproject-techstack'>
       <p>Tech stack:</p>   
       {projects[projectIndex].techstack.map((techName) => {
          const tech = techStackIcons.find(t => t.name === techName);
          return tech ? <div key={techName}>{tech.icon}</div> : null;
        })}
          
      </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Projects
