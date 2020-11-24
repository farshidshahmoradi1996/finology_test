import { Backdrop, Button, TextArea, TextBox } from "components";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CancelSvg } from "assets/svg/cancel.svg";
import AvatarEdit from "./AvatarEdit";
import { IPeople, IPeopleFormData } from "types";
interface Props {
  isOpen: boolean;
  onCloseRequested(): void;
  data: IPeople | null;
  onSave(newData: IPeopleFormData): void;
}

const ModificationModal: React.FC<Props> = ({
  isOpen,
  onCloseRequested,
  data,
  onSave,
}) => {
  const [name, setName] = useState(data?.name || "");
  const [position, setPosition] = useState(data?.position || "");
  const [description, setDescription] = useState(data?.description || "");
  const [avatar, setAvatar] = useState(data?.avatar || "");
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "initial";
  }, [isOpen]);
  useEffect(() => {
    setName(data?.name || "");
    setPosition(data?.position || "");
    setDescription(data?.description || "");
    setAvatar(data?.avatar || null);
  }, [data]);
  const onSubmit = () => {
    onSave({ name, position, description, avatar });
    resetForm();
    onCloseRequested();
  };
  const resetForm = () => {
    setName("");
    setDescription("");
    setAvatar(null);
    setPosition("");
  };
  const imgeInputRef = useRef(null as any);
  return (
    <>
      <input
        onChange={(e: any) => setAvatar(e.target.files[0])}
        ref={imgeInputRef}
        accept="image/x-png,image/jpeg,image/gif"
        type="file"
        style={{ display: "none" }}
      />
      <Backdrop visible={isOpen}>
        <div
          className={`w-11/12   ${
            isOpen ? "fadeInUp animated" : "fadeOutDown animated"
          } md:w-3/12  bg-white rounded-xl shadow-xl p-4`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex item-center justify-between">
            <p className="text-primary text-md font-bold">{`${
              data ? "Edit" : "Add"
            } Poeple`}</p>
            <div className="cursor-pointer" onClick={onCloseRequested}>
              <CancelSvg />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center">
              <AvatarEdit
                onClick={() => imgeInputRef.current.click()}
                src={avatar}
              />
            </div>

            <TextBox
              label="Name"
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
              placeholder="Enter Name"
            />

            <TextBox
              label="Position"
              onChange={(e) => setPosition(e.currentTarget.value)}
              value={position}
              placeholder="Enter Position"
              className="mt-2"
            />

            <TextArea
              label="Description"
              onChange={(e) => setDescription(e.currentTarget.value)}
              defaultValue={description}
              placeholder="Enter Description"
              className="mt-2"
              rows={8}
            />
          </div>

          <div className="flex justify-end mt-4 items-center">
            <Button
              title="Cancel"
              onClick={onCloseRequested}
              customColor
              className=" text-gray-500"
            />
            <Button
              title="Save"
              customColor
              className="bg-primary text-white w-32"
              onClick={onSubmit}
            />
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default ModificationModal;
