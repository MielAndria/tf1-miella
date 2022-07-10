import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const AddBox: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <div className={"add-box-container"}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
           height="30"
           width="25"
           style={{margin: 'auto'}}
      >
        <path d="M13.333 10.667h5.334a1.333 1.333 0 1 1 0 2.666h-5.334v5.334a1.333 1.333 0 1 1-2.666 0v-5.334H5.333a1.333 1.333 0 1 1 0-2.666h5.334V5.333a1.333 1.333 0 1 1 2.666 0z" fill="#fff">
        </path>
      </svg>
    </div>
  );
};

AddBox.defaultProps = {};

export default AddBox;
