"use client";
import Footer from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Profile() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const showToast = (title, desc) => {
    toast({
      title: title,
      description: desc,
    });
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/");
      }
      const response = await fetch("https://nakonapi.rizpedia.com/api/v1/me", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        showToast("Success", "Account deleted successfully");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        router.push("/");
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      showToast("Error", error.message);
    }
    setIsDeleting(false);
  };

  return (
    <>
      <Navbar />
      <div className="container pt-[100px] min-h-screen">
        <div className="">
          <h1 className="text-2xl font-bold">Account</h1>
          <h1 className="text-lg font-medium pb-5">Manage Your Profile</h1>
          <hr></hr>
        </div>

        <section>
          <div className="mt-7">
            <div className="w-full flex flex-row gap-4 items-center">
              <Avatar className="w-20 h-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-1">
                <h1 className="text-xl font-bold md:text-2xl">NAMA</h1>
                <h1 className="font-medium mb-1 sm:text-base md:text-base">
                  EMAIL
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" mt-6 ">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <form>
                  <h1 className="text-xl font-bold py-4">Details</h1>
                  <div className="mb-4 md:flex gap-10">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="w-full">
                        First Name
                      </Label>
                      <Input
                        autoComplete="firstName"
                        id="firstName"
                        required
                        type="firstName"
                      />
                    </div>
                    <div className="space-y-2 mt-5 md:mt-0">
                      <Label htmlFor="lastName" className="w-full">
                        Last Name
                      </Label>
                      <Input
                        autoComplete="lastName"
                        id="lastName"
                        required
                        type="lastName"
                        className=""
                      />
                    </div>
                  </div>
                  {/* username form */}
                  <div className="mb-4 md:mt-10">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Username</Label>
                      <Input
                        autoComplete="lastName"
                        id="lastName"
                        required
                        type="lastName"
                        className="md:w-[30rem]"
                      />
                    </div>
                  </div>
                  {/* email form */}
                  <div className="mb-4 md:mt-10">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        autoComplete="email"
                        id="email"
                        required
                        type="email"
                        className="md:w-[30rem]"
                      />
                    </div>
                  </div>
                  {/* button save */}
                  <div className="flex justify-start py-4">
                    <Button>Save</Button>
                  </div>
                  {/* password form */}
                  <div>
                    <h1 className="text-xl font-bold pt-5 pb-2">
                      Change Password
                    </h1>
                    <div className="mb-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="md:w-[30rem]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="md:w-[30rem]"
                        />
                      </div>
                    </div>
                    {/* button save */}
                    <div className="flex justify-start">
                      <Button>Save Password</Button>
                    </div>
                  </div>{" "}
                </form>
                <div className="col-span-5 text-white"></div>
              </div>
            </div>
          </div>
          {/* delete account */}
          <div className="mt-10">
            <h1 className="text-xl font-bold ">Delete Account</h1>
            <p className="text-sm my-5 ">
              If you delete your account, all your data will be permanently
              deleted. Please be certain.
            </p>
            <Button onClick={handleOpenDialog}>Delete Account</Button>
          </div>
        </section>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className="outline-red-600 outline-none bg-transparent hover:bg-red-600 text-white"
          >
            {isDeleting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Delete Account"
            )}
          </Button>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}

export default Profile;
