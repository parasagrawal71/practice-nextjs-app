type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  // This is a server component, so we can fetch data directly without using useEffect
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
