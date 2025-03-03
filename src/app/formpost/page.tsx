import { Metadata } from "next";
import FormPost from "@/components/FormPost";

export const metadata: Metadata = {
  title: "FormPost - Tanstack React Query",
  description: "Created by Trae Zeeofor",
};

const pageFormPost = () => {
  return (
    <>
      <FormPost />
    </>
  );
};

export default pageFormPost;
