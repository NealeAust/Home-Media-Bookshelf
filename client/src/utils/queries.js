import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
            }
    }
`;

export const GET_MEDIA = gql`
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

