import { People } from "components";

import React from "react";
import { IPeople } from "types";

interface Props {
  items: IPeople[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex justify-center flex-wrap mt-12">
      {items?.map((_item) => (
        <People data={_item} key={_item?.id?.toString()} />
      ))}
    </div>
  );
};

export default List;
