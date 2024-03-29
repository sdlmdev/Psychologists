import { useEffect, useState } from 'react';
import { SCREEN_MD, SCREEN_SM } from '../constants/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD,
  };
};
