import { User } from "../models/user";

export const addOneUser = async (body: any) => {
  const { login, created_at, html_url, public_repos, repos_url, updated_at } = body;
  const newUser = new User({login, created_at, html_url, public_repos, repos_url, updated_at});

  return newUser;
};
