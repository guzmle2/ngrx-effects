export interface IUser {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class User implements IUser{
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;

  constructor(avatar: string, email: string, first_name: string, id: number, last_name: string) {
    this.avatar = avatar;
    this.email = email;
    this.first_name = first_name;
    this.id = id;
    this.last_name = last_name;
  }

}
