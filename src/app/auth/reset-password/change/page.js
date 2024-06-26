"use client";

import Navbar from "@/components/group/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedTokenReset = localStorage.getItem("token-reset");
    if (storedTokenReset) {
      setToken(storedTokenReset);
    } else {
      router.push("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    password: "",
    password_confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    if (formData.password !== formData.password_confirm) {
      showToast("Error", "Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: formData.password,
            token: token,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        showToast("Success", "Password has been reset successfully");
        localStorage.removeItem("token-reset");
        router.push("/auth/login");
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      showToast("Error", error.message);
    }
    setIsSubmitting(false);
  };

  const showToast = (title, desc) => {
    toast({
      title: title,
      description: desc,
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              Reset Password
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-confirm">Confirm Password</Label>
                <Input
                  id="password-confirm"
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleChange}
                  required
                  type="password"
                />
              </div>
              <div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Change Password"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default RegisterPage;
