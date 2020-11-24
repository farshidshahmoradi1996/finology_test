import { usePeopleReducer } from "hooks";
import React, { useState } from "react";
import { IPeople, IPeopleFormData } from "types";
import Head from "./Head";

import ModificationModal from "./ModificationModal";
import { PeopleCard } from "components";
import ShowDetailModal from "./ShowDetailModal";

const People: React.FC = () => {
  const { state, addItem, deleteItems, updateItem } = usePeopleReducer();
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState<IPeople | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const submitModal = (_data: IPeopleFormData) => {
    if (editData) {
      //update
      updateItem({ id: editData?.id, ..._data });
      return;
    }

    addItem(_data);
  };
  const onSelectPeople = (_id: number) => {
    if (isEditMode) {
      setSelectedItems((prv) =>
        prv.includes(_id) ? prv.filter((_i) => _i !== _id) : [...prv, _id]
      );
    } else {
      setIsShowDetailModal(true);
      setEditData(state.find((_i) => _i.id === _id));
    }
  };
  return (
    <>
      <div className="container mt-28">
        <Head
          onAddRequest={() => {
            setEditData(null);
            setIsPeopleModalOpen(true);
          }}
          onEditModeRequested={() => setIsEditMode(true)}
          isEditMode={isEditMode}
          onDelete={() => {
            deleteItems(selectedItems);
            setIsEditMode(false);
            setSelectedItems([]);
          }}
          onEditCancel={() => {
            setSelectedItems([]);
            setIsEditMode(false);
          }}
        />
        <div className="flex justify-center flex-wrap mt-12">
          {state?.map((_item: IPeople) => (
            <PeopleCard
              data={_item}
              onEdit={(_data) => {
                setEditData(_data);
                setIsPeopleModalOpen(true);
              }}
              isSelected={selectedItems.includes(_item.id)}
              onSelect={onSelectPeople}
              key={_item?.id?.toString()}
              isEditMode={isEditMode}
            />
          ))}
        </div>
      </div>
      <ModificationModal
        isOpen={isPeopleModalOpen}
        onCloseRequested={() => setIsPeopleModalOpen(false)}
        onSave={submitModal}
        data={editData}
      />
      <ShowDetailModal
        isOpen={isShowDetailModal}
        onCloseRequested={() => setIsShowDetailModal(false)}
        data={editData}
      />
    </>
  );
};

export default People;
