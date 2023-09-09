import React, { useState , useEffect} from 'react';
import { FaCaretLeft , FaCaretRight } from "react-icons/fa";

const Slideshow = ({banners}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
  const interval = setInterval(() => {
    if (!isPaused) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }
  }, 8000);

  const handleScroll = () => {
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 10000); // Adjust the delay to resume after scrolling
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    clearInterval(interval);
    window.removeEventListener('scroll', handleScroll);
  };
}, [banners, isPaused]);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
      };

    return (
        <div className=' rounded-2xl ml-16 mr-16 mb-10 flex flex-col items-center '>
          
          <img className='rounded-2xl border-2 border-slate-800 ' src={banners[currentIndex]} alt={`Slide ${currentIndex}`}  />
          <div className='flex justify-center items-center h-16 border-4 border-slate-800 w-60 mt-5'><button className='' onClick={nextSlide}><FaCaretLeft className='text-slate-800 text-3xl' style={{ fontSize: '4rem' }}/></button> <button onClick={prevSlide}><FaCaretRight className='text-slate-800 text-3xl' style={{ fontSize: '4rem'}} /></button></div>
        </div>
      );
}

export default Slideshow;