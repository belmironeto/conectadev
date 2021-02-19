import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../utils/axios';
import PostView from '../../components/PostView';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [post, setPost] = useState([]);
  const param = useParams();
  const getPost = useCallback(async () => {
    const feed = await axios.get(`/api/posts/${param.slug}`);
    setPost(feed.data);
  }, [setPost]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return <PostView post={post} />;
}
