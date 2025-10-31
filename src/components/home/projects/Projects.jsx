import React, { useEffect, useRef } from 'react'
import "./Projects.css"
import { projects } from "../../data/data.js"

function Projects() {
  const projectListRef = useRef(null);

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
              <div  className='box' key={index}>
                <img src={item.cover} alt='not showing' />
                    <h5>{item.name}</h5>                
              </div>
            ))}
    </div>
    </div>
    </div>

    <div className='right-selectedproject'>
    <p>gggggg</p>
    </div>
    </div>
    </section>
    </>
  )
}

export default Projects
