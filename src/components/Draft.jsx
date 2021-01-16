import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Editor, EditorState, AtomicBlockUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyInput = () => {
  const [value, setValue] = useState('');
  const onChange = (evt) => setValue(evt.target.value);

  return <input value={value} onChange={onChange} />;
};

function Draft() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return (
    <>
      <MyInput />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </>
  );
}

export default Draft;
