import React from 'react'

const ProjectGallery = ( {project, setImageShown, setIsShown, toggleFullscreen} ) => {

  return (
          <div className='flex items-end gap-5 cursor-pointer overflow-hidden' onMouseEnter={() => {setIsShown(true), setImageShown(project.src)}} onMouseLeave={() => setIsShown(false)} onClick={() => toggleFullscreen()}>
            <div className='text-3xl'>
              {project.id}
            </div>
            <div>
              {project.name}
            </div>
          </div>
          )
}

export default ProjectGallery