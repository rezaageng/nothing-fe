import { gql } from '@apollo/client';

const CHARACTERS_QUERY = gql`
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
`;

export default CHARACTERS_QUERY;
