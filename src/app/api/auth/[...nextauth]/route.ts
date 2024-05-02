import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { prisma } from "@/config/prisma";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile?.email },
        });
        if (existingUser) {
          console.log("User already exists:", existingUser);
        } else {
          try {
            const newUser = await prisma.user.create({
              data: {
                fullName: profile?.name,
                email: profile?.email,
                password: "",
                companyName: "",
                employees: "",
              },
            });
          } catch (error) {
            console.log("Error creating user:", error);
          }
        }
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signIn",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
