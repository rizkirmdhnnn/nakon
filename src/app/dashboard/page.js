"use client";

import CustomFooter from "@/components/group/footer";
import MsgCard from "@/components/group/msgcard";
import Navbar from "@/components/group/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
import { ArrowRightCircle, Copy, MessageCircleIcon, Users } from "lucide-react";
import Link from "next/link";

function Dashboard() {
  const { toast } = useToast();
  return (
    <>
      <Navbar />
      {/* Statistik akun */}
      <main className="p-5 md:px-[100px] xl:px-[250px] pt-[100px] min-h-screen">
        <h1 className="text-2xl font-bold">Account Statistics</h1>
        <p className="text-base leading-10">See Your Account Statistics</p>
        <div className="flex flex-1 flex-col gap-4 md:gap-6 ">
          <div className="flex flex-1 flex-col gap-4 md:gap-8"></div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <Card
              x-chunk="dashboard-01-chunk-1"
              className="bg-secondary border-none"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total visitors
                </CardTitle>
                <Users className="h-4 w- q4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+278.350</div>
                <p className="text-xs text-muted-foreground">
                  Since october 2023
                </p>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-1"
              className="bg-secondary border-none"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total messages received
                </CardTitle>
                <MessageCircleIcon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">270</div>
                <p className="text-xs text-muted-foreground">
                  10 messages added today
                </p>
              </CardContent>
            </Card>

            <Card
              x-chunk="dashboard-01-chunk-1"
              className="bg-secondary border-none"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Share Link
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://nakon.vercel.app/p/aansukawinda"
                      readOnly
                    />
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="px-3"
                    onClick={() => {
                      copy(document.getElementById("link").value.trim());
                      toast({
                        title: "Link copied",
                        description: "Link copied to clipboard",
                        duration: 2000,
                      });
                    }}
                  >
                    <span className="sr-only">Copy</span>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Daftar Pertanyaan */}
        </div>
        <div className="flex mt-[50px]">
          <div>
            <h1 className="text-2xl font-bold">List of questions</h1>
            <p className="text-base mt-2">
              See the list of questions that have been asked
            </p>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1 mt-8">
            <Link href="./dashboard/messages">
              View All
              <ArrowRightCircle className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          <MsgCard
            question={"Pertanyaan #1"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"1"}
          />

          <MsgCard
            question={"Pertanyaan #2"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"2"}
          />

          <MsgCard
            question={"Pertanyaan #3"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"3"}
          />

          <MsgCard
            question={"Pertanyaan #4"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"4"}
          />

          <MsgCard
            question={"Pertanyaan #5"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"5"}
          />

          <MsgCard
            question={"Pertanyaan #6"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"6"}
          />
        </div>

        {/* Leaderboard */}
        <div className="grid gap-4 md:gap-8 mt-[50px]">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Leaderboard</CardTitle>
                <CardDescription>User with the most questions</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowRightCircle className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead className="text-right">Totals</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                    </TableCell>
                    <TableCell className="text-right">250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                    </TableCell>
                    <TableCell className="text-right">250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                    </TableCell>
                    <TableCell className="text-right">250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                    </TableCell>
                    <TableCell className="text-right">250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <CustomFooter />
    </>
  );
}

export default Dashboard;
