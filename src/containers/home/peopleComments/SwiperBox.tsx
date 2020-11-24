import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Comment } from "components";
import { IComment } from "types";
//mock -data
import _data from "./_data";
const SwiperBox: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={window.innerWidth < 768 ? 1 : 3}
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
  );
};

export default SwiperBox;
