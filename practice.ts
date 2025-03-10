type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  id: number;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
