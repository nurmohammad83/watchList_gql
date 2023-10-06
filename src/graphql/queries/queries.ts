import { gql } from "../__generated__";

export const GET_EPISODES = gql(/* GraphQL */ `
  query Episodes {
    episodes {
      results {
        id
        name
        episode
      }
    }
  }
`);
