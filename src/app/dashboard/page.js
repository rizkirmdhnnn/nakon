"use client";

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
import { useToast } from "@/components/ui/use-toast"
import copy from "copy-to-clipboard";
import {
  ArrowRightCircle,
  Calendar,
  Copy,
  MessageCircleIcon,
  Users,
} from "lucide-react";
import Link from "next/link";

function page() {
  const { toast } = useToast();
  return (
    <>
      <Navbar />
      {/* Statistik akun */}
      <main className="p-5 md:px-[100px] xl:px-[250px]">
        <h1 className="text-2xl font-bold">Statistik Akun</h1>
        <p className="text-base leading-10">Lihat statistik akun anda</p>
        <div className="flex flex-1 flex-col gap-4 md:gap-6 ">
          <div className="flex flex-1 flex-col gap-4 md:gap-8"></div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Kunjungan Keseluruhan
                </CardTitle>
                <Users className="h-4 w- q4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+278.350</div>
                <p className="text-xs text-muted-foreground">
                  sejak 20 oktober 2023
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Pesan Diterima
                </CardTitle>
                <MessageCircleIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">270</div>
                <p className="text-xs text-muted-foreground">
                  Hari ini bertambah 10 pesan
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
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
                      defaultValue="https://ui.shadcn.com/docs/installation"
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
            <h1 className="text-2xl font-bold">Daftar Pertanyaan</h1>
            <p className="text-base mt-2">
              Lihat semua daftar pertanyaan yang tersedia
            </p>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1 mt-8">
            <Link href="#">
              View All
              <ArrowRightCircle className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #1
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #2
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #3
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #1
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #2
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                Pertanyaan #3
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs font-medium ps-1">12 oktober 2024</p>
                </div>
              </CardTitle>

              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <p className="text-1xl text-muted-foreground">
                hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini
                hanya pesan dummy saja ya
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <div className="grid gap-4 md:gap-8 mt-[50px]">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Leaderboard</CardTitle>
                <CardDescription>User dengan pesan terbanyak</CardDescription>
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
                    <TableHead className="text-right">Total</TableHead>
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
    </>
  );
}

export default page;
