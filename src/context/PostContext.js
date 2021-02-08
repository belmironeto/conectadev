import React, { createContext, useState, useContext } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [markdownText, setMarkDownText] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };
  const handleChangeTags = (event, values) => {
    setTags(values);
  };
  const handleChangeMarkdown = (event) => {
    setMarkDownText(event.currentTarget.value);
  };

  return (
    <PostContext.Provider
      value={{
        image,
        setImage,
        title,
        setTitle: handleChangeTitle,
        tags,
        setTags: handleChangeTags,
        markdownText,
        setMarkDownText: handleChangeMarkdown,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const ctx = useContext(PostContext);
  const {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    markdownText,
    setMarkDownText,
  } = ctx;
  return {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    markdownText,
    setMarkDownText,
  };
}
