"use client";
import { FormControl, FormLabel, Input, Box, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postSlice";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let dispatch = useDispatch();

  function handleSubmit() {
    let newPost = {title: title, body: body}
    dispatch(addPost(newPost));
  }

  return (
    <Box
      className="p-6 my-12 flex flex-col gap-5"
      maxW="60%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="auto"
    >
      <div>
        <h3 className="text-2xl font-bold mb-1">Create a new blog post</h3>
        <p className="text-slate-500">
          Fill out the form below to create a new blog post.
        </p>
      </div>

      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter a title"
          className="mb-4"
          focusBorderColor="#94a3b8"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
        />
        <FormLabel>Email address</FormLabel>
        <Textarea
          placeholder="Enter the blog post content"
          focusBorderColor="#94a3b8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          resize='vertical'
          autoComplete='off'
          minH='200px'
        />
      </FormControl>
      <Button alignSelf="flex-end" className="w-fit ">
        Save
      </Button>
    </Box>
  );
}
