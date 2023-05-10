import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
            }
    }


query media {
    media
     {
       _id
       mediaType
       title
       description
       image
       }
     }
   
`;

