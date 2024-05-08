import Navbar from "@/components/group/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function profile() {
  return (
    <>
      <Navbar />
      <div className="container md:mx-25">
        <div className="container mt-5">
          <h1 className="text-2xl font-bold">Account</h1>
          <h1 className="text-lg font-medium pb-5">Manage Your Profile</h1>
          <hr></hr>
        </div>
        <section>
          <div className="container mt-7">
            <div className="w-full flex flex-row gap-4 items-center">
              {/* <Image href={"#"}className="my-auto  bg-blue-500 rounded-full shadow-lg"></Image> */}
              <Avatar className="w-20 h-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-1">
                <h1 className="text-xl font-bold md:text-2xl">John Doe cuk</h1>
                <h1 className="font-medium mb-1 sm:text-base md:text-base">fjakldfj</h1>
                <Link href={"#"} className=" font-medium text-primary sm:text-base md:text-sm ">
                  Update
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto mt-6">
            <div className="grid grid-cols-12">
              <div className="col-span-7">
                <form>
                  <h1 className="text-xl font-bold py-4">Detail</h1>
                  <div className="mb-4 flex gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nama Depan</Label>
                      <Input autoComplete="firstName" id="firstName" required type="firstName" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang</Label>
                      <Input autoComplete="lastName" id="lastName" required type="lastName" className="" />
                    </div>
                  </div>

                  {/* username form */}
                  <div className="mb-4 mt-10">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Username</Label>
                      <Input autoComplete="lastName" id="lastName" required type="lastName" className="md:w-[20rem]" />
                    </div>
                  </div>

                  {/* email form */}
                  <div className="mb-4 mt-10 md:flex gap-5">
                    <div className="mb-4 md:mr-2 md:mb-0 ">
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Email</Label>
                        <Input autoComplete="lastName" id="lastName" required type="lastName" className="" />
                      </div>
                    </div>
                    <div className="mt-[29px] md:mr-2 md:mb-0">
                    <Button>Verifikasi</Button>
                    </div>
                  </div>

                  {/* button save */}
                  <div className="flex justify-start py-4">
                  <Button>Save</Button>
                  </div>

                  {/* password form */}
                  <div>
                    <h1 className="text-xl font-bold pt-5 pb-2">Change Password</h1>
                    <div className="mb-4 mt- md:flex gap-5">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Password</Label>
                          <Input autoComplete="lastName" id="lastName" required type="lastName" className="" />
                        </div>
                      </div>
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <div className="space-y-2">
                          <Label htmlFor="lastName">New Password</Label>
                          <Input autoComplete="lastName" id="lastName" required type="lastName" className="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* button save */}
                  <div className="flex justify-start">
                    <Button>Save</Button>
                    {/* <button type="submit" className="md:px-4 md:py-2 bg-primary text-popover font-poppins rounded-xl hover:bg-hoverr_lavv">
                      Save
                    </button> */}
                  </div>
                </form>
                <div className="col-span-5 text-white"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default profile;
