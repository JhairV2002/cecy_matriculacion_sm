import { Roles } from "./roles";

export interface User {
  id: number;
  password: String;
  name: String;
  username: String;
  looked: boolean;
  expired: boolean;
  enabled: boolean;
  roles: Roles;
}
