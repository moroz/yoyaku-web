import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { User } from "../../interfaces/users";

export const CURRENT_USER_QUERY = gql`
  {
    currentUser {
      id
      email
    }
  }
`;

export interface CurrentUserQueryResult {
  currentUser: User | null;
}

export const useCurrentUser = () =>
  useQuery<CurrentUserQueryResult>(CURRENT_USER_QUERY);
