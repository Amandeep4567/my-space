import UserCard from "@/components/UserCard/UserCard";
// import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  //   throw new Error("This is an Error");
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-4">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
