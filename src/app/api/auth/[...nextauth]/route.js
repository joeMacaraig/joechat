import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


// database
import { DatabaseConnect } from "../../../../../lib/database";
import Messenger from "../../../../../models/messengers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await Messenger.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await DatabaseConnect(); // wait fot connection
        //check if user already exists
        const userExists = await Messenger.findOne({ email: profile.email });
        //if not, create user
        if (!userExists) {
          await Messenger.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export { handler as GET, handler as POST };
