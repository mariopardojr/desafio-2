import React from 'react';
import { HeaderBackground, HeaderProps, HeadingColor } from './types';


const Header: React.FC<HeaderProps> = ({ title, subtitle, text, background = HeaderBackground.LIGHT }) => {
  const getBackgroundColor = (): string => {
    const styleClass = background === HeaderBackground.LIGHT ? `bg-[${HeaderBackground.LIGHT}]` : `bg-[${HeaderBackground.DARK}]`
    console.log(styleClass)
    return styleClass
  }

  const getTextColor = (): string => {
    const styleClass = background === HeaderBackground.LIGHT ? `text-[${HeadingColor.BLACK}]` : `text-[${HeadingColor.WHITE}]`
    console.log(styleClass)
    return styleClass
  }

  return (
    <div className={`flex flex-col items-center w-full ${getTextColor()} ${getBackgroundColor()}`}>
      {title && <p className='text-[32px]'>{title}</p>}
      {subtitle && <p className='text-2xl'>{subtitle}</p>}
      {text && <p className='pt-4'>{text}</p>}
    </div>
  );
}

export default Header;

// text-[${background === HeaderBackground.LIGHT ? HeadingColor.BLACK : HeadingColor.WHITE}] 
// bg-[${background === HeaderBackground.LIGHT ? HeaderBackground.LIGHT : HeaderBackground.DARK}]