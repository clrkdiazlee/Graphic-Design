import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "use-local-storage";

const App = () => {
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

  const images = [
    {
      src: "../images/Social Media Graphic 3.png",
    },
    {
      src: "../images/Social Media Graphic 4.png",
    },
    {
      src: "../images/twitter1.jpg",
    },
    {
      src: "../images/Team Roster 2.png",
    },
    {
      src: "../images/twitter2.jpg",
    },
    {
      src: "../images/Poster Commission 1.png",
    },
    {
      src: "../images/Magazine Cover 2.png",
    },
    {
      src: "../images/Social Media Graphic 1.png",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const container = containerRef.current;
      if (container) {
        container.scrollLeft += event.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="app overflow-x-hidden overflow-y-hidden whitespace-nowrap w-[100%]"
      data-theme={localStorage.getItem('theme')}
    >
      {isOpen ? (
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
          <div className="flex absolute bottom-14 w-[97%] mr-12 laptop:ml-12 desktop:ml-25">
            <div className="flex -rotate-90">
              <img src="../icons/burger.svg" alt="" className="w-6" />
              <button
                className="text-lg whitespace-pre tablet:text-xl laptop:text-2xl text-blk transition-all duration-700"
                onClick={toggleMenu}
              >
                {isOpen ? " CLOSE" : " MENU"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex-col h-screen w-screen font-Cardinal justify-center items-center bg-wht transition-all duration-700 opacity-0 ${isOpen ? "hidden" : "flex opacity-100"}`}
        >
          <div className="flex w-full px-2 pb-2 justify-between phone:px-12 tablet:px-16 laptop:px-36 desktop:px-48">
            <div className="text-4xl leading-8 tracking-tighter tablet:text-5xl laptop:text-6xl text-blk transition-colors duration-700">
              <div>GRAPHIC</div>
              <div className="flex justify-end">DESIGN</div>
              <div>PORTFOLIO</div>
            </div>
            <div className="flex items-end text-sm -mb-[3px] gap-3 font-medium tracking-wider tablet:text-lg laptop:text-xl text-blk transition-colors duration-700">
              {isDark ? (
                <button
                  onClick={switchTheme}
                  className="text-blk transition-colors duration-700 opacity-45"
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
          </div>
          <div
            className={`w-[96%] inline-flex h-[36%] gap-2 overflow-x-scroll no-scrollbar border-x-blk border-x-[1px] laptop:w-[91%] scroll-smooth transition-all duration-700`}
            ref={containerRef}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt=""
                className={`border-blk border-[1px] saturate-[20%] brightness-[90%] cursor-pointer transition-all ease-in-out hover:saturate-[80%] hover:brightness-[100%] duration-500 object-cover`}
              />
            ))}
          </div>
          <div className="flex flex-col pt-2 leading-4 tracking-wide tablet:text-xl text-blk transition-colors duration-700 pr-[40rem]">
            <div>Clarence</div>
            <div>Lee</div>
          </div>
          <div className="flex absolute bottom-14 w-[97%] mr-12 laptop:ml-12 desktop:ml-25">
            <div className="flex -rotate-90">
              <img src="../icons/burger.svg" alt="" className="w-6" />
              <button
                className="text-lg whitespace-pre tablet:text-xl laptop:text-2xl text-blk transition-all duration-700"
                onClick={toggleMenu}
              >
                {isOpen ? " CLOSE" : " MENU"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;