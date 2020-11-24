import { Button, TextArea, TextBox } from "components";
import React from "react";

const Form: React.FC = () => {
  return (
    <div className="p-8">
      <TextBox label="Name" placeholder="Enter your Name" />
      <TextBox label="Email" placeholder="Enter your email" className="mt-4" />
      <TextBox
        label="Subject"
        placeholder="Please Select Your Subject"
        className="mt-4"
      />
      <TextArea
        label="Message"
        placeholder="write your message here"
        rows={6}
        className="mt-4"
      />
      <div className="flex justify-end mt-12">
        <Button
          customColor
          className="bg-primary text-white w-36"
          title="Send"
        />
      </div>
    </div>
  );
};

export default Form;
