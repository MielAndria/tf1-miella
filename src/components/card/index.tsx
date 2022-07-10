import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_IMAGE_BY_PROGRAM } from '../../services/program/program.service';
import AddBox from '../../atoms/add-box';

interface IProps {
  name: string;
  image_id: string;
}

const ProgramCard: FC<IProps> = (props) => {
  const {
    name,
    image_id,
  } = props;

  const {
    loading,
    error,
    data,
  } = useQuery(GET_IMAGE_BY_PROGRAM,{variables: {image_id}});

  const [imageFound, setImageFound] = useState<boolean>(false);

  useEffect(() => {
    if(data?.image_by_pk?.url) {
      fetch(data?.image_by_pk?.url, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          setImageFound(true)
        }
      }).catch(err => console.error(err));
    }
  }, [data])

  const imageURL = useMemo(() => {
    return imageFound ? data?.image_by_pk?.url : 'https://via.placeholder.com/200x270';
  }, [imageFound, data]);

  const title = useMemo(() => {
    const arrName = name.split(' ');
    return `${arrName[0]} ${arrName[1]} ${arrName[2]}`;
  }, [imageFound, name]);

  return (
    <div className={"w-48"}>
      {loading && <h1>Page is Loading...</h1>}
      {error && <h1>There are some error on the page.</h1>}
      {data && <div>
        <div className={"relative"}>
          <div className={"rounded-lg overflow-hidden"}>
            <img src={imageURL} alt={data?.image_by_pk?.alt}/>
          </div>
          <div className={"absolute z-10 inset-y-px right-[5px] top-[85%]"}>
            <AddBox />
          </div>
        </div>
        <div className={"text-white text-center py-3"}>{title}</div>
      </div>}
    </div>
  );
};

ProgramCard.defaultProps = {};

export default ProgramCard;
