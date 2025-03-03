//"use server";
import { TypeFormPost } from "./typesTanstackQ";

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export const getComments = async () => {
  const res = await fetch(`${BASE_API_URL}/comments`);

  if (!res.ok) {
    const errorMessage = `Error ${res.status}: ${res.statusText}`;
    throw new Error(errorMessage);
  }

  return res.json();
};

export const createFormPost = async (body: TypeFormPost) => {
  const res = await fetch(`${BASE_API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  if (!res.ok) {
    const errorMessage = `Error ${res.status}: ${res.statusText}`;
    throw new Error(errorMessage);
  }

  return res.json();
};

export const getFormPosts = async () => {
  const res = await fetch(`${BASE_API_URL}/posts`);

  if (!res.ok) {
    const errorMessage = `Error ${res.status}: ${res.statusText}`;
    throw new Error(errorMessage);
  }

  return res.json();
};
