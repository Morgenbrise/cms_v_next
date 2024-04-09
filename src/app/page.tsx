// src/app/page.tsx
import { auth, signOut } from "../auth";

export default async function Home() {
  // const session = await auth();
  return (
    <div>
      <h1>홈 페이지</h1>
      <h2>인증 없이 못보는 화면</h2>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>로그아웃</button>
      </form>
    </div>
  );
}
