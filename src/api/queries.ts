import { gql } from '@apollo/client'

export const GET_LAUNCHES = gql`
  query getLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      links {
        flickr_images
      }
      mission_name
      launch_date_utc
    }
  }
`

export const GET_LAUNCH_BY_ID = gql`
  query getLaunchById($launchId: ID!) {
    launch(id: $launchId) {
      id
      links {
        flickr_images
      }
      mission_name
      launch_date_utc
      details
    }
  }
`
