import { gql } from '@apollo/client';

// LOGIN_USER mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// ADD_USER mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// SAVE_BOOK mutation
export const SAVE_BOOK = gql`
  mutation saveBook($bookInput: BookInput!) {
    saveBook(bookInput: $bookInput) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// REMOVE_BOOK mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      savedBooks {
        bookId
      }
    }
  }
`;

// 

// query GetMe {
//   me {
//     _id
//     username
//     email
//     bookCount
//     savedBooks {
//       bookId
//       authors
//       description
//       title
//       image
//       link
//     }
//   }
// }


//     query getAllUsers {
//     allUsers {
//       _id
//       username
//       email
//     }
//   }

//   mutation Login {
//   login(email: "test@test.com", password: "testtest") {
//     token
//     user {
//       _id
//       email
//     }
//   }
// }

// mutation AddUser {
//   addUser(username: "NewTest", email: "newTest@test.com", password: "newtest") {
//     token
//     user {
//       _id
//       username
//       email
//     }
//   }
// }

// mutation SaveBook {
//   saveBook(bookInput: {
//     authors: ["Test"],
//     description: "Test",
//     title: "Test",
//     bookId: "123",
//     image: "Test",
//     link: "Test"
//   }) {
//     _id
//     username
//     email
//     savedBooks {
//       bookId
//       authors
//       description
//       title
//       image
//       link
//     }
//   }
// }

// mutation RemoveBook {
//   removeBook(bookId: "123") {
//     _id
//     savedBooks {
//       bookId
//     }
//   }
// }

