import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Notice this is only an object, not a full Auth.js instance
export default {
  callbacks: {
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth;
    // },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        type: {},
      },
      authorize: async (credentials) => {
        console.log(credentials, "CREDENTIALS");

        console.log(credentials, process.env.NEXT_APP_API_URL, "CREDENTIALS");

        const res = await fetch(`${process.env.NEXT_APP_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const { success, msg, result } = await res.json();
        console.log(msg, result, "DATA");

        if (success) {
          return result;
        } else {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
