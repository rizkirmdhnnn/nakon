"use client";
import Footer from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
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
import Link from "next/link";
import { set } from "date-fns";

function Profile() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({});
  const [telegramId, setTelegramId] = useState("");

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });

  const [password, setPassword] = useState({
    password: "",
    new_password: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/");
    } else {
      setData(JSON.parse(user) || {});
      getUser();
    }
  }, []);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://nakonapi.rizpedia.com/api/v1/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setUserData({
          firstname: data.data.firstname,
          lastname: data.data.lastname,
          username: data.data.username,
          email: data.data.email,
        });
        // Update user data in local storage
        localStorage.setItem("user", JSON.stringify(data.data));
        setData(data.data);
      } else {
        showToast("Error", "Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      showToast("Error", error.message);
    }
    setIsLoading(false);
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

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://nakonapi.rizpedia.com/api/v1/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        showToast("Success", "Profile updated successfully");
        setIsEditing(false);
      } else {
        showToast("Error", data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.log(data.message);
      showToast("Error", data.message);
    }
    getUser();
  };

  const handleChangePassword = async (e) => {
    if (password.password === "" || password.new_password === "") {
      showToast("Error", "Please fill all fields");
      return;
    }

    if (password.password === password.new_password) {
      showToast("Error", "New password cannot be the same as current password");
      return;
    }

    e.preventDefault();
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(password),
        },
      );

      const data = await response.json();
      if (response.ok) {
        showToast("Success", "Password updated successfully");
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      showToast("Error", "Server error");
    }
    password.password = "";
    password.new_password = "";
    getUser();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputTeleChange = (e) => {
    setTelegramId(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const showToast = (title, desc) => {
    toast({
      title: title,
      description: desc,
    });
  };

  const handleTelegramId = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/me/notif",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ telegram_user_id: telegramId }),
        },
      );
      const data = await response.json();
      console.log("Success:", data);
      showToast("Success", "Telegram ID updated successfully");
    } catch (error) {
      console.error("Error updating telegram id:", error);
      showToast("Error", "Server error");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container pt-[100px] min-h-screen">
        <div className="">
          <h1 className="text-xl font-bold">Account</h1>
          <h1 className="text-lg  font-medium pb-5">Manage Your Profile</h1>
          <hr></hr>
        </div>

        <section>
          <div className="mt-7">
            <div className="w-full flex flex-row gap-2 items-center">
              <Avatar className="w-14 h-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-1">
                <h1 className="text-xl font-bold md:text-2xl" id="nama-top">
                  {data.firstname} {data.lastname}
                </h1>
                <h1
                  className="font-medium mb-1 text-[11px] sm:text-sm md:text-base email-text"
                  id="email-top"
                >
                  {data.email}
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
                      <Label htmlFor="firstname" className="w-full">
                        First Name
                      </Label>
                      <Input
                        name="firstname"
                        id="firstname"
                        required
                        type="text"
                        disabled={!isEditing}
                        value={userData.firstname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2 mt-5 md:mt-0">
                      <Label htmlFor="lastname" className="w-full">
                        Last Name
                      </Label>
                      <Input
                        name="lastname"
                        id="lastname"
                        required
                        type="text"
                        disabled={!isEditing}
                        value={userData.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* username form */}
                  <div className="mb-4 md:mt-10">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        name="username"
                        id="username"
                        required
                        type="text"
                        className="md:w-[30rem]"
                        disabled={!isEditing}
                        value={userData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* email form */}
                  <div className="mb-4 md:mt-10">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        required
                        type="email"
                        className="md:w-[30rem]"
                        disabled={!isEditing}
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-start py-4">
                    {!isEditing && (
                      <Button type="button" onClick={handleEditClick}>
                        Edit
                      </Button>
                    )}
                    {isEditing && (
                      <Button type="button" onClick={handleSaveClick}>
                        Save
                      </Button>
                    )}
                  </div>
                </form>

                {/* form id telegram */}
                <form onSubmit={handleTelegramId}>
                  <div>
                    <h1 className="text-xl font-bold pt-7 pb-2">
                      Notification To Telegram
                    </h1>
                    <div className="mb-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="telegramId">
                          Set Your Telegram Id To Get Notification
                        </Label>
                        <Input
                          name="telegramId"
                          id="telegramId"
                          type="text"
                          className="md:w-[30rem]"
                          value={telegramId}
                          onChange={handleInputTeleChange}
                        />
                        <p className="text-[14px] my-5 ">
                          No need to add @, just add your telegram id
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-3">
                      <Button type="submit">Submit</Button>
                    </div>
                  </div>
                  {/* hint */}
                  <div class="border-[1px] p-4 rounded-lg shadow-md max-w-lg mt-5">
                    <div class="flex space-x-2 mb-2">
                      <span class="font-semibold">Tips!</span>
                    </div>
                    <ul class="list-disc list-inside space-y-2">
                      <li>You need to fill in your username to get chat id</li>
                      <li>
                        Send command /start to{" "}
                        <a
                          href={"https://t.me/nakon_notif_bot"}
                          className="hover:text-blue-300 text-primary"
                        >
                          @Nakon-Notif
                        </a>{" "}
                        in telegram
                      </li>
                      Copy id that given by bot after sending /start command
                      <li></li>
                    </ul>
                  </div>
                </form>

                {/* Ini form password*/}
                <form onSubmit={handleChangePassword}>
                  <div>
                    <h1 className="text-xl font-bold pt-10 pb-2">
                      Change Password
                    </h1>
                    <div className="mb-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>

                        <Input
                          name="password"
                          id="password"
                          type="password"
                          className="md:w-[30rem]"
                          value={password.password}
                          onChange={handleInputPasswordChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          name="new_password"
                          id="new_password"
                          type="password"
                          className="md:w-[30rem]"
                          value={password.new_password}
                          onChange={handleInputPasswordChange}
                        />
                      </div>
                    </div>
                    {/* button save */}
                    <div className="flex justify-start">
                      <Button>Change Password</Button>
                    </div>
                  </div>{" "}
                </form>
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
