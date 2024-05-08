import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/toggleTheme";

function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-sm px-6 py-3 md:px-[100px] xl:px-[250px] bg-secondary fixed w-full">
      <h1 className="text-2xl font-bold">
        {" "}   
        <Link href="/">Nakon</Link>
      </h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>...</DropdownMenuItem>
            <DropdownMenuItem>...</DropdownMenuItem>
            <DropdownMenuItem>Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
