import { User } from "../models/user";
import fetch from 'node-fetch';

export const addUser = async (login: string) => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  if (!response.ok) {
    return false;
  }

  const userFromApi = await response.json();
  const { created_at, html_url, name, public_repos, repos_url, updated_at } = userFromApi;
  const newUser = new User({login, created_at, html_url, name, public_repos, repos_url, updated_at});
  newUser.save();

  return true;

};
