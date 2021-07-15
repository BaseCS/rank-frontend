import NextAuth from 'next-auth'
import { session } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user"
    }),
    // ...add more providers here
  ],

  // Sign in page is home page
  pages: {
    signIn: "/"
  },

  // Expose GitHub user ID and login name
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (profile?.id && profile?.login) {
        token.id = profile.id;
        token.login = profile.login;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      session.user.login = token.login;
      return session;
    }
  }

  // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
})