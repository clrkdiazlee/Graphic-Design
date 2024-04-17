import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage';

const Menu = () => {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark').matches;
    const [ theme, setTheme ] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        setIsDark(!isDark)
        console.log(newTheme)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

  return (
   <div></div>
  )
}

export default Menu