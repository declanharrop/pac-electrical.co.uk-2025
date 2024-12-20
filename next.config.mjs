/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
  env: {
    API_ROUTE:
      'https://api-eu-west-2.graphcms.com/v2/cl3j6k7j27wli01z470ufhk8f/master',
    API_KEY:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzM0NTE1MTgsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2wzajZrN2oyN3dsaTAxejQ3MHVmaGs4Zi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTk4MTAxMTEtZGFhMy00Zjk3LWJkOTktMGUxMmI0ZTA4YTNkIiwianRpIjoiY2xjcnR0cm8yMG1jNTAxdDlicDZraDhnMCJ9.EuiIU4pmA_AtVtJDGrHxfRv-muSMGNSsHimI6aV67oOOS5H6f4KC_jYrp1veR-hlk-lpAW00E4a7rA6WDcbGvvD1B1lDc0HHvqN8rwpsqu8w-UQg-0r9ok0GQ6d6myXgpUofDUZpiZEHbBHkWI13h6woAybkWgefZj7n8ledcA49SpNsYq3cLJ9hIDscttAPfbCJePpNrT_V3hygSSoQr0iXq8Uf7QDwG8rxh0TSh_JGN8NqdVR4XYjHYKyTz1bT8p5J6s9FkeI5a8p5PSXL0o2L1xOdJMKMqwcA-sk742LcXuMP7-omgv5HLpJa0DLZcD_lgcjHe2kwrmTLNBXXbNvanyZpBNqlwy-FIkud9Chs2SiR1CuiI2lletj6gYmLcdpMChCtaQJUUcAPY0AJm1S2tx22g-bwgea-bK32O1nIA5QLT9aaiLQUeDL5hSajqSwGGuWBCbvcjP-SwLaGqQAssIxmieNR3yrGHM6nExWrRN5DVXJg8bkGLOho6shUjHZNi279pYgogRBBzz_elDABUlGlsIxsh6FXBtmGECjPzp_ov5qVrEk_Eq9tmfjYT-Lqqaxk_Cl4EZiGAf9SDJX8WUoGTq6x6zOi__S9FcMbPc8-20E1gB-qHO92-GGB3SohVBYnwHa_myvRQOzO5gUCWx9MoHuEQCCGt5UHZ6c',
  },
};

export default nextConfig;
