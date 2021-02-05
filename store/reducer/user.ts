import { AnyAction } from "redux";
import initialState from "../state/user";
import User from "../types/user";

export default function user(state: User = initialState, action: AnyAction): User {
  return state;
}
