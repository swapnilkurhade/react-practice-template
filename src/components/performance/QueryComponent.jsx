import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Users = () => {
  const { data, isLoading, error } = useQuery(["users"], fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const QueryComponent = () => (
  <QueryClientProvider client={queryClient}>
    <h1>React Query Example</h1>
    <Users />
  </QueryClientProvider>
);

export default QueryComponent;
