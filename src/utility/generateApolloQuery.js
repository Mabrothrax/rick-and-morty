import gql from 'graphql-tag'

export function getQuery () {
    return gql`
      query ($page: Int!){
        characters (page: $page) {
          info {
            count,
            pages,
            next,
            prev
          }
          results {
            image,
            id,
            name,
            gender,
            species,
            episode { episode }
          }
        }
      }`
  }
