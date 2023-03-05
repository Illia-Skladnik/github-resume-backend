import { User } from "../models/user";
import fetch from 'node-fetch';

export const editUser = async (login: string) => {
  const response = await fetch(`https://api.github.com/users/${login}`);
  const userFromApi = await response.json();  
  const userInDB = await User.findOne({ login: login });

  if (!userInDB) {
    return;
  }

  if (userFromApi.updated_at === userInDB.updated_at) {
    return true;
  }

  const { created_at, html_url, name, public_repos, repos_url, updated_at } = userFromApi;
  const filter = { login: login };
  const update = { created_at, html_url, name, public_repos, repos_url, updated_at };

  const user = await User.findOneAndUpdate(filter, update);

  if (!user) {
    return;
  }

  user.save();
  return true;
};
