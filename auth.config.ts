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
        token.vendor = user.vendor;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.user.id = token.id;
      session.vendor = token.vendor;
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        phone: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials, process.env.NEXT_APP_API_URL, "CREDENTIALS");

        const res = await fetch(`${process.env.NEXT_APP_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const { success, message, data } = await res.json();
        console.log(message, data, "DATA");

        if (success) {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
