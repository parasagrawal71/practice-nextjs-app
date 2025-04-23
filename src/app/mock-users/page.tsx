import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const response = await fetch(
    "https://680908831f1a52874cdbb00b.mockapi.io/users",
  );
  const users: MockUser[] = await response.json();

  async function addUser(formData: FormData) {
    "use server"; // This is a server action
    const name = formData.get("name");
    const response = await fetch(
      "https://680908831f1a52874cdbb00b.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN", // This is secure way to send token as it is server-side code
        },
        body: JSON.stringify({ name }),
      },
    );
    const newUser = await response.json();
    revalidatePath("/mock-users"); // Revalidate the path to refresh the data
    console.log("New user added:", newUser);
  }

  return (
    <div>
      <form action={addUser}>
        <input type="text" name="name" placeholder="Name" required />
        <button type="submit">Add User</button>
      </form>
      <div style={{ paddingTop: 20 }}>
        <h1>Mock Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
