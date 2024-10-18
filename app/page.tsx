import List from "@/components/List";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col">
        <List />
      </div>
      <div className="flex"></div>
    </main>
  );
}
