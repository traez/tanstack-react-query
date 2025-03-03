"use client";
import { createUser } from "@/lib/usersServer";
import { getUsers } from "@/lib/usersClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: getUsers });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (query.isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <button onClick={() => mutation.mutate({ id: 1, name: "John Doe" })}>
        Create User
      </button>
      {query.data?.map((user: User) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
