import { gql } from '@apollo/client';

export const GET_PROGRAMQUERY = gql`
  query GetPrograms { 
    program(limit: 12, where: {image_id: {_is_null: false}}) {
    id
    image_id
    name
    }
  }
`;

export const GET_IMAGE_BY_PROGRAM = gql`
  query GetImageDetails($image_id: uuid!) {
    image_by_pk(id: $image_id) {
      alt
      url
    }
  }
`;
