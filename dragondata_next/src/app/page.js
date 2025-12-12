import Image from "next/image";
import Test from "./Modules/Test.js"

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Test></Test>
          <Image
          className="dark:invert"
          src="/next.svg"
          alt="NextJS Logo"
          width={100}
          height={20}
          priority
          ></Image>
          
        </main>
    </div>
  );
}
