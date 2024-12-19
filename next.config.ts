import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: ['scontent.fbri4-2.fna.fbcdn.net', "scontent.fbri4-1.fna.fbcdn.net"],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
}

