import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';

export default function IsMobile() {

  const isMobile = useIsMobile();

  console.log('isMobile', isMobile);

  return (
    <>

    </>
  );
}