"use client";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/lib/apiTanstack";
import { TypeComment } from "@/lib/typesTanstackQ";

const Anson = () => {
  const getCommentsQuery = useQuery<TypeComment[]>({
    queryKey: ["getComments"],
    queryFn: getComments,
  });

  // Destructuring with renaming (aliasing)
  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = getCommentsQuery;

  console.log(getCommentsQuery);

  if (commentsError && !commentsIsLoading) {
    return <div>An error has occurred while fetching Comments...</div>;
  }

  return (
    <section className="p-4">
      <div>Anson Comments</div>
      {commentsIsLoading ? (
        <>Loading....</>
      ) : (
        <div>
          {commentsData?.map((comment) => (
            <div key={comment.id} className="border p-2 mb-2">
              <div>
                <b>Name:</b> {comment.name}
              </div>
              <div>
                <b>Email:</b> {comment.email}
              </div>
              <div>
                <b>Post ID:</b> {comment.postId}
              </div>
              <div>
                <b>Comment ID:</b> {comment.id}
              </div>
              <div>
                <b>Body:</b> {comment.body}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Anson;
