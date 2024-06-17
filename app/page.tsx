import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
    // return <p>You must be signed in...</p>
  }
  return <main></main>;
}
