import { User } from "../models/user";

export const deleteUser = async (login: any) => {
  await User.findOneAndDelete({ login: {$gte:login} });
};