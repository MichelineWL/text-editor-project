'use client'; // Indicate that this component is client-side only

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js'; // Import EditorState from draft-js

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false, // Disable server-side rendering for this component
});

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function WysiwygEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state

  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState); // Update the editor state
  };

  // Function to handle image upload
  const imageUploadCallback = (file: File) => {
    return new Promise((resolve, reject) => {
      // Simulate an image upload process
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image
        resolve({ data: { link: imageUrl } }); // Resolve with the image URL
      }, 1000);
    });
  };

  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            uploadCallback: imageUploadCallback,
            alt: { present: true, mandatory: false }, // Allow alt text for images
          },
        }}
      />
    </div>
  );
}
