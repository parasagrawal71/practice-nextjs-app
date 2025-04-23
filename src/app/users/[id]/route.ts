import { users } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return new Response("User not found", {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}
