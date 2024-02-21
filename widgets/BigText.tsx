import React from 'react'

const BigText = ({text,textStyles}:any) => {
  return (
    <h1 className={`text-darker_text font-semibold text-3xl ${textStyles}`}>
      {text}
    </h1>
  );
}

export default BigText