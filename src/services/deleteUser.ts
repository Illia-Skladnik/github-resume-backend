import { User } from "../models/user";

export const deleteUser = async (login: any) => {
  User.findOneAndDelete({ login: {$gte:login} });
};