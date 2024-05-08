"use client";

import Navbar from "@/components/group/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
function page() {
  return (
    <>
      <Navbar />
      <main className="p-5 md:px-[100px] xl:px-[250px]  pt-[100px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Semua Pesan</h1>
            <p className="text-base leading-10">Lihat semua pesan masuk</p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dibaca">Sudah dibaca</SelectItem>
              <SelectItem value="belumdibaca">Belum dibaca</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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

          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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

          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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

          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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

          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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

          <Card
            x-chunk="dashboard-01-chunk-1"
            className="bg-secondary border-none"
          >
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
      </main>
    </>
  );
}

export default page;
