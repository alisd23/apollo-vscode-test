import gql from 'graphql-tag';

export const query = gql`
  query getShop {
    shop {
      name
    }
  }
`;
