type User = {
  email: string;
  password: string;
};

const USERS_KEY = "users";

const defaultUser: User = {
  email: "admin@gmail.com",
  password: "1234",
};

const getUsers = (): User[] => {
  let users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

  if (!users.length) {
    users = [defaultUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  return users;
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};

export const loginUser = (email: string, password: string): User | undefined => {
  const users = getUsers();
  return users.find(
    (u) => u.email === email && u.password === password
  );
};