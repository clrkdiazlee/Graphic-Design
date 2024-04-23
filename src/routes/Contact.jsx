import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') == 'dark');
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState("hidden");
  
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
            <div className='laptop:relative absolute top-16 text-4xl leading-8 tracking-tighter tablet:text-5xl laptop:text-6xl text-blk transition-colors duration-700'>
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
        <div className='flex flex-col text-blk text-7xl phone:gap-24 transition-colors duration-700  tablet:pt-10 laptop:text-7xl laptop:gap-11 overflow-hidden iphone:gap-8'>
            <div className='flex flex-col items-center laptop:items-start'>
                <div className='text-7xl iphone:text-5xl'>
                    Clarence Lee
                </div>
                <div className='text-3xl iphone:text-2xl'>
                    Front-end Developer and Graphic Designer
                </div>
            </div>
            <div className='flex flex-col items-center laptop:items-start'>
                <div className='text-7xl iphone:text-5xl'>
                    Email
                </div>
                <div className='text-3xl iphone:text-2xl'>
                    clrkdiazlee@gmail.com
                </div>
            </div>
            <div className='flex flex-col items-center laptop:items-start'>
                <div className='text-7xl iphone:text-5xl'>
                    Phone
                </div>
                <div className='text-3xl iphone:text-2xl'>
                    +639667963584
                </div>
            </div>
            <div className='flex flex-col items-center laptop:items-start'>
                <div className='text-7xl iphone:text-5xl'>
                    LinkedIn
                </div>
                <div className='text-3xl iphone:text-2xl'>
                    https://www.linkedin.com/in/clrkdiazlee/
                </div>
            </div>
          </div>
          <div className='flex absolute bottom-10 right-12 iphone:right-6 iphone:bottom-5 items-end text-sm -mb-[3px] gap-3 font-medium tracking-wider tablet:text-lg laptop:text-xl text-blk transition-colors duration-700'>
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

export default Contact