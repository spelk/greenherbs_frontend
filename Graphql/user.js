import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($password: String!, $username: String!) {
    login(
      input: { password: $password, username: $username }
    ) {
      authToken
      clientMutationId
      refreshToken
      sessionToken
    }
  }
`;