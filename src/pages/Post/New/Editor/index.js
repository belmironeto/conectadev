import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useDropzone } from 'react-dropzone';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  image: {
    height: 100,
  },
  textArea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const arrayTags = [
  { title: 'react.js' },
  { title: 'node.js' },
  { title: 'dotnetcore' },
  { title: 'webdev' },
];

export default function PostEditor() {
  const classes = useStyles();
  const ctx = usePost();
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
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImage(base64data);
      };
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  });

  return (
    <>
      <Box mb={2} {...getRootProps()}>
        <input {...getInputProps()} />
        <Button>Carregar Imagem</Button>
      </Box>
      {image && (
        <Box mb={2}>
          <img src={image} alt="backgroud" className={classes.image} />
        </Box>
      )}
      <Box mb={2}>
        <TextField
          id="title"
          placeholder="Título"
          fullWidth
          value={title}
          onChange={setTitle}
        />
      </Box>
      <Box mb={2}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={arrayTags}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={setTags}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="Tags" />
          )}
        />
      </Box>
      <textarea
        onChange={setMarkDownText}
        value={markdownText}
        className={classes.textArea}
      >
        editor markdown
      </textarea>
    </>
  );
}
