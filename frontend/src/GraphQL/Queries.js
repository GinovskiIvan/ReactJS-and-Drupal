import {gql} from '@apollo/client'

export const LOAD_RELEASE_NOTES = gql `query {
    release_notes {
      total
      items {
        id
        title
        author
        version
        release_date
        release_type {
          id
          name
        }
      }
    }
  }`;

