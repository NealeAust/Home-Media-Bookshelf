import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
   loginUser(email: $email, password: $password) {
     token
     user {
            _id
            username
     }
   }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
                  }
    }
}
`;

export const ADD_MEDIA = gql`
  mutation addMedia($media: changedMedia!) {
    addMedia (media: $media)
    {
        mediaId
  	    mediaType
        title
        description
        image
             }
    }
  
`;

export const UPDATE_MEDIA = gql`
  mutation updateMedia($media: changedMedia) {
    updateMedia (media: {changedMedia: $mediaId, mediaType: $mediaType, title: $title, description: $description, image: $image})
    {
        mediaId
  	    mediaType
        title
        description
        image
             }
    
}
`;

export const DELETE_MEDIA = gql`
   mutation deleteMedia ($mediaId: ID!){
      deleteMedia(mediaId: $mediaId) 
      {
        mediaId
              }
        
  }
    
`;

