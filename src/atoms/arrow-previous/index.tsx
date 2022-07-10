import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const ArrowPrevious: FC<IProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={"absolute z-20 top-[50%] bg-[#313132] cursor-pointer"} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg"
           height="48"
           width="48"
           fill="#eeeeee"
           style={{transform: 'translateX(10px)'}}
      >
        <path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/>
      </svg>
    </div>
  );
};

ArrowPrevious.defaultProps = {};

export default ArrowPrevious;
