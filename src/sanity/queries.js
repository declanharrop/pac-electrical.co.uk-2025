import { groq } from 'next-sanity';

// Fetches the latest 6 Case Studies to populate the block
// We filter by sector in Javascript later, or we could do it here.
// For now, fetching all 6 sorted by date is efficient.
export const LATEST_CASE_STUDIES_QUERY = groq`*[_type == "caseStudy"] | order(releaseDate desc) {
  _id,
  title,
  "slug": slug.current,
  "hero": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  // Ensure we get the sector TITLE so SectorLabel works
  "studySectors": sectors[]->title, 
  introduction
}`;

export const ALL_CASE_STUDIES_QUERY = groq`*[_type == "caseStudy"] | order(releaseDate desc) {
  _id,
  title,
  "slug": slug.current,
  introduction,
  "hero": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  "studySectors": sectors[]->title
}`;

// 2. Fetch SINGLE study (for the detail page)
export const SINGLE_CASE_STUDY_QUERY = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "metaDescription": metaDescription,
  releaseDate,
  client,
  introduction,
  
  // Stats
  technology,
  systemSize,
  paybackPeriod,
  savings,
  annualOutput,
  co2Savings,
  
  // Media
  youtubeVideo,
  "hero": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  "gallery": gallery[] {
    "url": asset->url,
    "alt": alt
  },
  
  // Content
  content,
  
  // Sectors & Tags
  "studySectors": sectors[]->title,
  "tags": tags[]->title
}`;

// src/sanity/queries.js

export const PAGE_BUILDER_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  metaTitle,
  metaDescription,
  "hero": {
    "title": heroImage.title,
    "subtitle": heroImage.subtitle,
    "imageUrl": heroImage.image.asset->url,
    "imageAlt": heroImage.image.alt
  },
  // Fetch the sections polymorphically
  pageSections[]{
    ...,
    _type,
    _key,
    
    // IMAGE TEXT: Map image
    _type == "imageTextSection" => {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },

    // BLOCKS SECTION: Map nested images inside contentBlocks
    _type == "blocksSection" => {
      ...,
      contentBlocks[]{
        ...,
        "imageUrl": image.asset->url
      }
    },

    // IMAGE SECTION: Map image
    _type == "imageSection" => {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },

    // SLIDESHOW: Map array of images
    _type == "slideshowSection" => {
      ...,
      images[]{
        "url": asset->url,
        "alt": alt
      }
    }
    
    // Video and FAQs fields are usually simple strings, so '...' covers them
  }
}`;
