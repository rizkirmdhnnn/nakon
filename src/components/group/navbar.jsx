"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/toggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
  }, []);

  return (
    <div className="flex justify-between items-center shadow-sm px-6 py-3 md:px-[100px] xl:px-[250px] bg-secondary fixed w-full z-10">
        <Link href={"/"}>
          <Image
            width={120}
            height={50}
            src={"/logo.png"}
            alt="nakon"
            className="m-1"
          ></Image>
        </Link>
      

      {/* <h1 className="text-2xl font-bold">
        {" "}
        <Link href="/">Nakon</Link>
      </h1> */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        {user ? (<DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/leaderboard"}>Leaderboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/"}>Keluar</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>) : (null)}
        
      </div>
    </div>
  );
}

export default Navbar;
