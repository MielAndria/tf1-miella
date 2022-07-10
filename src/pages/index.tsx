import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROGRAMQUERY } from '../services/program/program.service';
import Slider from 'react-slick';
import ProgramCard from '../components/card';
import ArrowNext from '../atoms/arrow-next';
import ArrowPrevious from '../atoms/arrow-previous';


interface IProgrammeItem {
  id: string;
  image_id: string;
  name: string;
}
const ProgramPage = () => {
  const { loading, error, data } = useQuery(GET_PROGRAMQUERY);
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrevious />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={"container"}>

        <div className={"w-11/12 my-0 mx-auto h-[520px] flex flex-col justify-center"}>
          {loading && <h1>Page is Loading...</h1>}
          {error && <h1>There are some error on the page.</h1>}
          <Slider {...settings} className={"h-40"}>
            {data?.program?.map((item: IProgrammeItem) => (
                <ProgramCard
                  key={item?.id}
                  name={item?.name}
                  image_id={item?.image_id}
                />
              ))
            }
          </Slider>
        </div>
    </div>
  );
};

export default ProgramPage;
