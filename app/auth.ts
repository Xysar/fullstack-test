import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { auth } = NextAuth({
  providers: [GitHub],
});
