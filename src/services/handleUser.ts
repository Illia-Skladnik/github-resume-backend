import { User } from "../models/user";
import { addUser } from "./addUser";
import { editUser } from "./editUser";

export const handleUser = async (body: any) => {
  const { login } = body;
  const userInDB = await User.findOne({ login: login });

  if (!userInDB) {
    return await addUser(login);
  }

  
  return editUser(login);
};
