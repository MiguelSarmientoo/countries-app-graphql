// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;
