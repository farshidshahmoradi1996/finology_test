import React, { useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { Comment } from "components";
import { IComment } from "types";
//mock -data
import _data from "./_data";

interface Props {
  onSlideChange(i: number): void;
}
const SwiperBox: React.FC<Props> = ({ onSlideChange }) => {
  return (
    <Carousel
      itemsToShow={window.innerWidth < 768 ? 1 : 3}
      onChange={(e: any) => onSlideChange(e.index)}
      pagination={false}
      enableAutoPlay
      autoPlaySpeed={3000}
      showArrows={false}
    >
      {_data?.map((item: IComment, index) => (
        <Comment
          name={item.name}
          avatar={item.avatar}
          content={item.content}
          special={item.special}
        />
      ))}
    </Carousel>
  );
};

export default SwiperBox;
