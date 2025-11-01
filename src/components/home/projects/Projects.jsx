import React, { useEffect, useRef, useState } from 'react'
import "./Projects.css"
import { projects } from "../../data/data.js"

function Projects() {

  const [projectIndex, setProjectIndex] = useState(0);

  const projectListRef = useRef(null);

  const selectTheProject = (index)=>{
    setProjectIndex(index);
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
              <div  className='box' key={index} onMouseEnter={() => selectTheProject(index)}>
                <img src={item.cover} alt='not showing' />
                    <h5>{item.name}</h5>                
              </div>
            ))}
    </div>
    </div>
    </div>

    <div className='right-selectedproject'>
    <div className='selectedproject'>
      <div className='selectedproject-images'>
        <img src={projects[projectIndex].cover} alt='not showing' />               
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
