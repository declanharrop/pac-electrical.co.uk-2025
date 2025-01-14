import { gql } from '@apollo/client';

export const LATEST_STUDIES_QUERY = gql`
  query {
    caseStudies(orderBy: date_DESC) {
      id
      date
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      studySectors
      title
      slug
      introduction
    }
  }
`;
export const STUDIES_QUERY = gql`
  query {
    caseStudies(orderBy: date_DESC) {
      id
      date
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      studySectors
      title
      slug
      introduction
    }
  }
`;

export const LATEST_NEWS_QUERY = gql`
  query {
    articles(first: 4, orderBy: date_DESC) {
      id
      slug
      title
      subtitle
      preview
      date
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
    }
  }
`;
