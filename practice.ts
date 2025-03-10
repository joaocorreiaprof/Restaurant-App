type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  id: number;
  role: UserRole;
};

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_doe", role: "admin" },
  { id: 3, username: "guest_user", role: "guest" },
];

function updateUser(id: any, updates: any) {}

updateUser(1, { username: "new_john_doe" });
updateUser(3, { role: "admin" });
