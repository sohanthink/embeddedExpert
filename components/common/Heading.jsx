import React from 'react'

const Heading = ({ text, cn, varient }) => {
    return (
        <div className={`${varient == 'nopx' ? 'md:px-0' : 'md:px-80'} text-2xl md:text-5xl capitalize font-bold text-black-600 text-center p-0 leading-8 ${cn}`}>{text}</div>
    )
}

export default Heading