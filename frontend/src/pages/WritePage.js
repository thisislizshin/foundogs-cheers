import React from "react";
import Responsive from "components/common/Responsive";
import WriteActionButtonsContainer from "components/write/WriteActionButtonsContainer";
import EditorContainer from "components/write/EditorContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
