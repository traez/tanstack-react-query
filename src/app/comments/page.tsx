import { Metadata } from "next";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "Comments - Tanstack React Query",
  description: "Created by Trae Zeeofor",
};

const pageComments = () => {
  return (
    <>
      <Comments />
    </>
  );
};

export default pageComments;
