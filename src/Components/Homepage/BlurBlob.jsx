import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({position,size}) => {
    //destructure position and size
    const{top,left}=position
    const{width,height}=size

  return (
    <div className='absolute' style={{
        top:top,
        left: left,
        width:width,
        height: height,
        transform: 'translate(-50%, -50%)',

    }}>
        <div className='w-full h-full rounded-full opacity-20 blur-3xl animate-blob bg-sky-300'></div>
    </div>
  )
}
//define prop types
BlurBlob.prototype={
    position:PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string
    }),
    size:PropTypes.shape({
        height:PropTypes.string,
        width:PropTypes.string
    }),
}

export default BlurBlob