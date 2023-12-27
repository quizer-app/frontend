import { useQuery } from "@tanstack/react-query";
import useApiPrivate from "../../hooks/useApiPrivate";

type UserType = {
  id: string;
  createdAt: number;
  username: string;
  email: string;
  verified: boolean;
  role: string;
};

type UsersResponseType = {
  users: UserType[];
  message: string;
};

export default function Users() {
  const apiPrivate = useApiPrivate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["users"],
    queryFn: () => apiPrivate.get<UsersResponseType>("/users"),
  });

  return (
    <article>
      <h2>Users list</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {!isLoading && !isError && (
        <ul>
          {data.data.users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}

      <button>Refresh</button>
    </article>
  );
}
