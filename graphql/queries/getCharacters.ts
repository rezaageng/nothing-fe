import { gql } from '../__generated__/gql';

const GET_CHARACTERS = gql(/* GraphQL */ `
  query getCharacters {
    characters {
      data {
        id
        attributes {
          name
          rarerity
          description
        }
      }
    }
  }
`);

export default GET_CHARACTERS;
