export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: "user" | "admin";
}
