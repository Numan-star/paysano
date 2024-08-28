import React from 'react'

type RegularTextProps = {
    text: string;
    
  }
  
  const RegularText = ({ text }: RegularTextProps) => {
    return (
        <p className='regular-14 lg:regular-16 text-appGray'>{text}</p>
    )
  }
  
  
  export default RegularText