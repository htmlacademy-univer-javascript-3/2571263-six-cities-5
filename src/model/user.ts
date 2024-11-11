export type UserCredentials = {
  email: string;
  token: string;
};

export type UserData = {
  name: string;
  avatar: string;
  status: string;
};

export type User = UserData & UserCredentials;
