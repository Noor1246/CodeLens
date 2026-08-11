import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  trustedOrigins: [
    "http://localhost:3000",
    "https://codelens-xi-five.vercel.app",
  ],

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      scope: ["repo", "user:email"],
    },
  },
});