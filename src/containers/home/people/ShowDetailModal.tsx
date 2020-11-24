import { Backdrop } from "components";
import React, { useEffect } from "react";
import { ReactComponent as CancelSvg } from "assets/svg/cancel.svg";

import { IPeople } from "types";
interface Props {
  isOpen: boolean;
  onCloseRequested(): void;
  data: IPeople | null;
}

const ShowDetailModal: React.FC<Props> = ({
  isOpen,
  onCloseRequested,
  data,
}) => {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "initial";
  }, [isOpen]);

  return (
    <>
      <Backdrop visible={isOpen}>
        <div
          className={`w-11/12   ${
            isOpen ? "fadeInUp animated" : "fadeOutDown animated"
          } md:w-4/12  bg-white rounded-xl shadow-xl overflow-hidden`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="md:flex overflow-hidden">
            <div className="md:w-3/12 w-full flex justify-center mt-4 md:mt-0">
              <img
                src={
                  data?.avatar?.name
                    ? URL.createObjectURL(data?.avatar)
                    : data?.avatar
                }
                alt="avaata"
                className="md:w-full md:h-full w-24 h-24 rounded-full md:rounded-none object-cover "
              />
            </div>
            <div className=" md:w-8/12 p-6">
              <p className="font-bold text-md text-center md:text-left">
                {data?.name}
              </p>
              <p className="mt-2 text-xs text-gray-700 text-center md:text-left">
                {data?.position}
              </p>
              <p className="mt-4 text-xs text-gray-700 text-center md:text-left">
                {data?.description}
              </p>
            </div>
            <div className="md:w-1/12 w-full justify-center flex  mb-4 md:mb-0">
              <div className="cursor-pointer mt-4" onClick={onCloseRequested}>
                <CancelSvg />
              </div>
            </div>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default ShowDetailModal;
