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
    caseStudies(orderBy: date_DESC, first: 1000) {
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

export const STUDY_QUERY = gql`
  query caseStudies($slug: String!) {
    caseStudies(where: { slug: $slug }) {
      id
      title
      slug
      metaDesc
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      introduction
      date
      client
      sector
      technology
      systemSize
      paybackPeriod
      savings
      installed
      annualOutput
      ytVideo
      co2Savings
      slideshow {
        id
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
      tag
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

export const NEWS_STORY = gql`
  query Articles($slug: String!) {
    articles(where: { slug: $slug }) {
      date
      id
      title
      heroAlt
      tag
      ytVideo
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
      slideshow {
        id
        url(transformation: { document: { output: { format: webp } } })
      }
    }
  }
`;

export const ALL_NEWS_DATA = gql`
  query AllNewsData {
    articles(orderBy: date_DESC, first: 1000) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
    }
  }
`;

export const LATEST_SECTOR_STUDIES_QUERY = gql`
  query ($sector: Sector!) {
    caseStudies(
      orderBy: date_DESC
      where: { studySectors_contains_all: [$sector] }
      first: 2
    ) {
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

export const STANDARD_PAGE_QUERY = gql`
  query StandardPageQuery($id: ID!) {
    page(where: { id: $id }) {
      id
      pageTitle
      metaTitle
      metaDescription
      heroImage {
        image {
          url(transformation: { document: { output: { format: webp } } })
        }
        title
        subtitle
      }
      pageSections {
        ... on BlocksSection {
          id
          contentBlock {
            text
            title
            image {
              url(transformation: { document: { output: { format: webp } } })
            }
            moreInfo
          }
          title
        }
        ... on FaQsSection {
          id
          title
          subtitle
          frequentlyAskedQuestion {
            id
            question
            answer
          }
        }
        ... on ImageSection {
          id
          image {
            url(transformation: { document: { output: { format: webp } } })
          }
          title
          subtitle
        }
        ... on ImageTextSection {
          id
          image {
            url(transformation: { document: { output: { format: webp } } })
          }
          title
          text
          textLeft
        }
        ... on VideoSection {
          id
          subtitle
          videoTitle
          video
        }
      }
    }
  }
`;
