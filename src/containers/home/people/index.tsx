import { usePeopleReducer } from "hooks";
import React, { useState } from "react";
import { IPeople } from "types";
import Head from "./Head";
import List from "./List";
import ModificationModal from "./ModificationModal";

const People: React.FC = () => {
  const { state } = usePeopleReducer();
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const submitModal = (_data?: IPeople) => {
    console.log(_data);
  };
  return (
    <>
      <div className="container">
        <Head onAddRequest={() => setIsPeopleModalOpen(true)} />
        <List items={state} />
      </div>
      <ModificationModal
        isOpen={isPeopleModalOpen}
        onCloseRequested={() => setIsPeopleModalOpen(false)}
        onSave={submitModal}
      />
    </>
  );
};

export default People;
