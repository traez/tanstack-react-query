"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFormPost, getFormPosts } from "@/lib/apiTanstack";
import { TypeFormPostData } from "@/lib/typesTanstackQ";

const FormPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const USER_ID = 4589;
  const queryClient = useQueryClient();

  const { mutate: createFormPostMutation } = useMutation({
    mutationFn: createFormPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getFormPosts"] });
      setTitle("");
      setBody("");
    },
  });

  const {
    data: FormPostData,
    error: FormPostError,
    isLoading: isFormPostLoading,
  } = useQuery<TypeFormPostData[]>({
    queryKey: ["getFormPosts"],
    queryFn: getFormPosts,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Body:", body);
    createFormPostMutation({
      title,
      body,
      userId: USER_ID,
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 w-full md:w-1/2"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700"
            >
              Body
            </label>
            <input
              name="body"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Post
          </button>
        </form>

        <aside className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Recent Posts
          </h2>
          {isFormPostLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : FormPostError ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
              Failed to load posts
            </div>
          ) : FormPostData && FormPostData.length > 0 ? (
            <div className="space-y-4">
              {FormPostData.map((post) => (
                <article
                  key={post.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
                >
                  <h3 className="font-medium text-lg text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{post.body}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No posts available
            </div>
          )}
        </aside>
      </div>
    </>
  );
};

export default FormPost;
