import { useEffect, useState } from 'react'
import ProjectGallery from '../components/ProjectGallery';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Projects = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') == 'dark');
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState("hidden");
  const [imageShown, setImageShown] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [isFullscreen, setFullscreen] = useState(false)
  const toggleFullscreen = () => {
    setFullscreen(!isFullscreen)
  }
  
  const switchTheme = () => {
    const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme' , newTheme)
    setIsDark(!isDark)
  }
  
  const fadeAnimation = () => {
    setFade(() => {
      if (fade === "hidden") {
        setFade('flex');
      } else {
        setFade('hidden')
      }
    });
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    fadeAnimation()
  }
  
  const projects = [
    {
      id: '1',
      src: '../projects/Social Media Graphic 3.png',
      name: 'Wild Rift I',
    },
    {
      id: '2',
      src: '../projects/Social Media Graphic 4.png',
      name: 'Wild Rift II'
    },
    {
      id: '3',
      src: '../projects/twitter1.jpg',
      name: 'Twitter Banner I'
    },
    {
      id: '4',
      src: '../projects/twitter2.jpg',
      name: 'Twitter Banner II'
    },
    {
      id: '5',
      src: '../projects/Team Roster 2.png',
      name: 'Esports Graphic I'
    },
    {
      id: '6',
      src: '../projects/Social Media Graphic 1.png',
      name: 'Esports Graphic II'
    },
    {
      id: '7',
      src: '../projects/Poster Commission 1.png',
      name: 'Poster Commission'
    },
    {
      id: '8',
      src: '../projects/Magazine Cover 2.png',
      name: 'Magazine Cover'
    },
  ]

  useEffect(() => {
    console.log(isDark)
  }, [isDark])

  return (
    <div className='app overflow-x-hidden overflow-y-hidden whitespace-nowrap w-[100%] ' data-theme={localStorage.getItem('theme')}>
      {
        isOpen ? 
        <div
          className={`phone:flex-col laptop:flex-row h-screen w-screen font-Cardinal justify-center items-center bg-wht transition-all duration-700 gap-16 ${fade}
        `}>
          <div className="laptop:relative absolute top-16 text-4xl leading-8 tracking-tighter tablet:text-5xl laptop:text-6xl text-blk transition-colors duration-700">
            <div>GRAPHIC</div>
            <div className="flex justify-end">DESIGN</div>
            <div>PORTFOLIO</div>
          </div>
          <div className="flex flex-col text-blk text-7xl gap-2 transition-colors duration-700 laptop:text-8xl">
            <div>
              <span className="text-3xl">1</span>
              <a href="/"> HOME</a>
            </div>
            <div>
              <span className="text-3xl">2</span>
              <a href="/Projects"> PROJECTS</a>
            </div>
            <div>
              <span className="text-3xl">3</span>
              <a href="/Contact"> CONTACT</a>
            </div>
          </div>
          <div className="flex absolute bottom-10 right-12 items-end text-sm -mb-[3px] gap-3 font-medium tracking-wider tablet:text-lg laptop:text-xl text-blk transition-colors duration-700">
            {isDark ? (
              <button
                onClick={switchTheme}
                className="text-blk transition-colors duration-700 opacity-45 "
              >
                LIGHT
              </button>
            ) : (
              <button
                onClick={switchTheme}
                className="text-blk transition-all duration-700 "
              >
                LIGHT
              </button>
            )}
            <div>/</div>
            {isDark ? (
              <button
                onClick={switchTheme}
                className="text-blk transition-colors duration-700 "
              >
                DARK
              </button>
            ) : (
              <button
                onClick={switchTheme}
                className="text-blk transition-colors duration-700 opacity-45 "
              >
                DARK
              </button>
            )}
          </div>
          <div className='flex absolute bottom-14 iphone:bottom-9 w-[97%] mr-12 iphone:mr-6 laptop:ml-12 desktop:ml-25'>
            <div className='flex -rotate-90'>
                <img src="../icons/burger.svg" alt="" className='w-6'/>
                <button className='text-lg whitespace-pre tablet:text-xl laptop:text-2xl text-blk transition-colors duration-700' onClick={toggleMenu}>{isOpen ? ' CLOSE' : ' MENU'}</button>
            </div>
        </div>
        </div>
      :  
      <div className={`phone:flex-col laptop:flex-row h-screen w-screen font-Cardinal justify-center items-center ${isDark ? 'bg-dragonblk2' : 'bg-dragonwht'} bg-cover transition-all duration-700 gap-16 ${isOpen ? 'hidden' : 'flex'}`}>
          <div className='absolute top-16 laptop:top-10 text-4xl leading-8 tracking-tighter tablet:text-5xl laptop:text-3xl text-blk transition-colors duration-700 desktop:text-4xl 1920:text-5xl 768:text-4xl'>
            <div>GRAPHIC</div>
            <div className='flex justify-end'>DESIGN</div>
            <div>PORTFOLIO</div>
          </div>
          <div className='flex absolute top-4 left-4 w-[97%] transition-all duration-700'>
                <Link to={'/'} className='flex gap-2 transition-all duration-700'>
                    <img src={`${isDark ? '/icons/arrowwht.svg' : '/icons/arrowblk.svg'}`} alt="" className='w-6 transition-all duration-700'/>
                    <div className='text-lg whitespace-pre tablet:text-xl laptop:text-2xl text-blk transition-colors duration-700'>Home</div>
                </Link>
            </div>
          <div className='flex gap-20 w-[90%] justify-center relative'>
            <div className='flex flex-col text-blk text-4xl gap-3 transition-colors duration-700 tablet:gap-10 tablet:pt-10 laptop:text-4xl laptop:gap-6 desktop:text-4xl desktop:gap-5 1920:text-5xl overflow-hidden 768:gap-8 768:text-5xl 4k:text-7xl 4k:gap-11'>
              {projects.map((project, index) => (
                <ProjectGallery project={project} key={index} setImageShown={setImageShown} isShown={isShown} setIsShown={setIsShown} toggleFullscreen={toggleFullscreen}/>
              ))}
            </div>
            <div className={`w-[40%] hidden justify-center items-center laptop:flex desktop:flex`} onClick={toggleFullscreen}>
              <Transition
                className='w-3/5'
                show={isShown}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                  <img src={imageShown} alt="" className={`border-[1px] border-blk w-[100%]`}/>
              </Transition>
            </div>
          </div>
            <div className={`left-[16%] desktop:left-[35%] 1920:left-[35%] right-0 ml-auto mr-auto w-[100%] z-30 transition-all duration-500 ${isFullscreen ? 'absolute opacity-100' : 'hidden opacity-0'} overflow-hidden`}>
              <img src={imageShown} alt="" className={`w-[70%] border-[1px] border-blk desktop:w-[30%] 4k:w-[30%] overflow-hidden`}/>
            </div>
            {isFullscreen ? 
            <div className={`w-screen h-screen overflow-hidden bg-wht absolute bg-opacity-90 z-20 transition-all duration-300`}>
              <div className='text-blk flex justify-end pr-10 pt-6 text-6xl' onClick={toggleFullscreen}>
                X
              </div>
            </div> :
            <div className={`w-screen h-screen overflow-hidden bg-wht absolute bg-opacity-0 z-20 pointer-events-none transition-all duration-300`}></div>
            }
          <div className='flex absolute bottom-10 right-12 items-end text-sm -mb-[3px] gap-3 font-medium tracking-wider tablet:text-lg laptop:text-xl text-blk transition-colors duration-700'>
            {
              isDark ? <button onClick={switchTheme} className='text-blk transition-colors duration-700 opacity-45 '>LIGHT</button> : <button onClick={switchTheme} className='text-blk transition-all duration-700 '>LIGHT</button>
            }
            <div>/</div>
            {
              isDark ? <button onClick={switchTheme} className='text-blk transition-colors duration-700 '>DARK</button> : <button onClick={switchTheme} className='text-blk transition-colors duration-700 opacity-45 '>DARK</button>
            }
          </div>
          <div className='flex absolute bottom-14 iphone:bottom-9 w-[97%] mr-12 iphone:mr-6 laptop:ml-12 desktop:ml-25'>
            <div className='flex -rotate-90'>
                <img src="../icons/burger.svg" alt="" className='w-6'/>
                <button className='text-lg whitespace-pre tablet:text-xl laptop:text-2xl text-blk transition-colors duration-700' onClick={toggleMenu}>{isOpen ? ' CLOSE' : ' MENU'}</button>
            </div>
        </div>
      </div> 
      }
    </div>
  )
}

export default Projects