import Image from "next/image";
import NavBar from "./Modules/NavBar.js";




export default function Home() {

  return (
    <div className="flex min-h-screen items-center font-sans">
          
      <NavBar></NavBar>
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
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
