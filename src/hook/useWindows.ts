import React from 'react'
export const useWindows = () => {
  const [size, setSize] = React.useState([window.innerWidth])
  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth])
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])
  return size
}