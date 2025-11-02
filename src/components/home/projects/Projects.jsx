import React, { useEffect, useRef, useState } from 'react'
import "./Projects.css"
import { projects } from "../../data/data.js"

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
     <h1>Projects</h1>
     <p>gggggggggggggggggggggggggggggggggggggggggggg</p>
    </div>
    <div className='leftbottom-allprojects'>
    <div className='projectlist' ref={projectListRef}>
      {projects.map((item, index) => (
              <div  className='box' key={index}  
              onMouseEnter={() => {
              if (hoverEnabled) selectTheProject(index);
              }}
              onClick={() => {
                selectTheProject(index);
                setHoverEnabled(false); // disable hover after clicking
              }} >
                <img src={item.img_1} alt='not showing' />
                    <h5>{item.name}</h5>                
              </div>
            ))}
    </div>
    </div>
    </div>

    <div className='right-selectedproject'>
    <div className='selectedproject'>
      <div className='selectedproject-images'>
        <button className='img-btn left-btn' onClick={() => previousImage()}>←</button>
        <button className='img-btn right-btn' onClick={() => nextImage()}>→</button>
        <img src={projects[projectIndex][`img_${selectedImage}`]} alt='not showing' />
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
      <div className='selectedproject-namedescription'>
       <p>{projects[projectIndex].name}</p>  
      </div>
      <div className='selectedproject-techstack'>
       <p>{projects[projectIndex].name}</p>     
      </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Projects
