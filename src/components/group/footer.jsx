import React from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/toggleTheme";

function footer() {
  return (
    <>
      <footer class="bg-white  shadow dark:bg-secondary mt-20 sticky ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <h1 className="text-2xl font-bold">
                {" "}
                <Link href="/">Nakon</Link>
              </h1>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  semebereeeee
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  sembere-sembere
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Keluar
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Nakont0lll
            </a>
            . copyright oh oh oh oh
          </span>
        </div>
      </footer>
    </>
  );
}

export default footer;
