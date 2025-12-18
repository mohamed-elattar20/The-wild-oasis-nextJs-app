import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, reuqest }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(account.email);
        if (!existingGuest)
          await createGuest({
            fullName: user.name,
            email: user.email,
          });
        return true;
      } catch {
        return false; // prevent sign in if guest not found
      }
    },
    async session({ session, token, user }) {
      const guest = getGuest(session.user.email);
      // Attach additional properties to the session object here
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
