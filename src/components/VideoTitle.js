import React from 'react';
import { Fade } from 'react-reveal';

const VideoTitle = ({title,overview}) => {

    
  return (
    <Fade top>
    <div className='w-3/12 p-2 mx-6 text-white absolute my-[17%]'>
     <div className='text-3xl p-2 m-2 font-bold'>
        {title}
     </div>
     <div className='p-2 m-2'>
        {overview}
     </div>
    </div>
    </Fade>
  )
}

export default VideoTitle
