import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/lib/definitions";
import GoogleProvider from "next-auth/providers/google";
// import kakao from "next-auth/providers/kakao";
// import naver from "next-auth/providers/naver";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      async authorize(credentials) {
        if (credentials.id && credentials.password) {
          // 백엔드에서 로그인 처리
          const res = await fetch(`http://localhost:8082/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({
              principal: credentials.id,
              credentials: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          let loginRes = {
            success: true,
            data: {
              user: {
                ID: "user1",
                NAME: "홍길동",
                EMAIL: "email@email.email",
              },
            },
          };
          // 로그인 실패 처리
          if (!loginRes.success) return null;
          // 로그인 성공 처리
          return {
            id: loginRes.data.user.ID ?? "",
            name: loginRes.data.user.NAME ?? "",
            email: loginRes.data.user.EMAIL ?? "",
          } as User;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (true) {
        return session;
      }
      if (!token) {
        return session;
      }
      session.user = token.user as User;
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      if (trigger === "update" && session) {
        token = { ...token, user: session };
        return token;
      }
      return token;
    },
  },
});
