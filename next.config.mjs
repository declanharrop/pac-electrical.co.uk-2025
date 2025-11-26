/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
    ],
  },
  env: {
    API_ROUTE:
      'https://eu-west-2.cdn.hygraph.com/content/cm862phah0b6807l14qa28jv0/master',
    API_KEY:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDE3OTMyMzUsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY204NjJwaGFoMGI2ODA3bDE0cWEyOGp2MC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZjg0Y2ZkNGEtYjkzNi00NDQ4LWI0M2UtNDNiNzcxNjJlNGI2IiwianRpIjoiY2xjcnR0cm8yMG1jNTAxdDlicDZraDhnMCJ9.leoT0PKqW552Op8Cr9C_Wo1XvuV2vd_3Gpy_TvgjCfhvP06fInO-5Umf42QpTv_cvJxwgEsEKVk6LeqCFlbsrExolEYXtLs5kFdZDKhB13MGYV8kddbp8DT14UsMRFgIQ3BYZyRQV6PE_HbhtTeeDCVcBiz3CU2jY6QrpWg2elxhJYh7tGPcKgUNcN9fYQVBB4R7IYVNXlWWEwfSv3MnOPBs18hoX5WHKIljYVRMd8KNxHgiJ7COq6bK1KBCv-prSypjhbqeq_RFjWGWFxuBFoeWin-Tz83vXuK6JqYOKP9rVUjJJUJyY4OyYp4oaLN9HXxdgu8pek-DNGgpAMUrPEtpdykifTl_vLT8DTG7_hb4ToYFTLlg_UpAiB2gDzj80H29hC-sCNSkgPmt0bhGKrRMFj2kQ5_mmOvv5om3cFennT0Lspzi5SUpGaHvtMfh16XAqdtF2LqVjHnIKmQ_7iISx7IJhcRQHqYlWXT1beOrZkYKdq3Y6HD7XJElkP47tQ8cCFtyhg_i0VHo3kZZJ8SZlwb4DfDRJQrjivP3xM5XjfoZDwMUEnAchQlwQR70JAC6mKn8QHoZjZqaonhQFomsPSRjXP0XAu4WkLbX9HHa42s07MvNzl8sAdHQ9BpCTCDdCmzM2b8Sqyn2qWZXn9Jx2XvaTfaveqayml6I9vo',
  },
};

export default nextConfig;
