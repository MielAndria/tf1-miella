import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const ArrowNext: FC<IProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={"absolute z-20 right-[0px] top-[50%] bg-[#313132] cursor-pointer"} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill="#eeeeee"
      >
        <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/>
      </svg>
    </div>
  );
};

ArrowNext.defaultProps = {};

export default ArrowNext;
