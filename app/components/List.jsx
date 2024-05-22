"use client";

import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postThunk } from "../redux/postSlice";
import { userThunk } from "../redux/userSlice";
import matchPost from "../redux/posts";
import PostCard from "../components/Card";

export default function List() {
  const postList = useSelector((state) => state.post.data);
  const userList = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  // Was triggering infinite loop when used in useEffect
  const posts = useMemo(() => matchPost(userList, postList), [userList, postList]);

  useEffect(() => {
    let shouldFetchPosts = !postList.length;
    let shouldFetchUsers = !userList.length;

    if (shouldFetchPosts) {
      dispatch(postThunk());
    }

    if (shouldFetchUsers) {
      dispatch(userThunk());
    }
  }, [dispatch, postList, userList]);

  return (
    <div className="px-14 py-5">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}