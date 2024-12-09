export type UserCredentials = {
  email: string;
  token: string;
};

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: string;
};

export type AuthData = {
  login: string;
  password: string;
}

export type User = UserData & UserCredentials;
