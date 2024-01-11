import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import  Auth  from './components/Auth';
import Login from './components/Login';
import SendData from './components/sendData';
import { AuthProvider } from './AuthContext';


const MyRichTextEditor = () => {


  // const [content, setContent] = useState('');
  // const [displayedContent, setDisplayedContent] = useState('');

  // useEffect(() => {
  //   // Retrieve content from local storage when the component mounts
  //   const storedContent = localStorage.getItem('richTextContent');
  //   if (storedContent) {
  //     // Use DOMPurify to sanitize the content before setting it
  //     setDisplayedContent(DOMPurify.sanitize(storedContent));
  //   }
  // }, []);

  // const handleChange = (value) => {
  //   setContent(value);
  // };

  // const handleButtonClick = () => {
  //   // Here you would send 'content' to your database or local storage
  //   // For demonstration purposes, storing it in local storage
  //   localStorage.setItem('richTextContent', content);
  //   setDisplayedContent(DOMPurify.sanitize(content));
  // };

  return (
    // <div>
    //   <ReactQuill
    //     theme="snow"
    //     value={content}
    //     onChange={handleChange}
    //   />
    //   <button onClick={handleButtonClick}>Update Content</button>
    //   <p dangerouslySetInnerHTML={{ __html: displayedContent }} />

    //   <p>---? coming form local storage{localStorage.getItem("richTextContent")}</p>
    // </div>
    <>
    <AuthProvider>
  
      <Auth />
      <Login />
      <SendData />
    </AuthProvider>
    </>
  );
};

export default MyRichTextEditor;
