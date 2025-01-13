import React from 'react'

const SubHeading = ({ text, cn }) => {
    return (
        <p className={`text-black-300 text-center text-sm leading-6 md:text-xl md:leading-8 px-0 md:px-40 ${cn}`}>{text}</p>
    )
}

export default SubHeading