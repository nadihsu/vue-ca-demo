export type UserItem = {
  name: string;
  age: number;
  phone: number;
  address: string;
  skills: Array<string>;
};

export type GetUserListResponse = {
  status: string;
  data: Array<UserItem>;
};
