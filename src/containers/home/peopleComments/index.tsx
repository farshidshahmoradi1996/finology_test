import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//local
import { ReactComponent as HeartSvg } from "assets/svg/heart.svg";
import { Comment } from "components";
import { IComment } from "types";

//mock -data
import _data from "./_data";

const People: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center container px-12">
        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center">
          <HeartSvg />
        </div>
        <h2 className="text-primary font-bold text-2xl pl-12">
          What other People say about <br />
          our services
        </h2>
      </div>
      <div className="container mt-8 mb-16">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {_data?.map((item: IComment) => (
            <SwiperSlide>
              <Comment
                name={item.name}
                avatar={item.avatar}
                content={item.content}
                special={item.special}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default People;
