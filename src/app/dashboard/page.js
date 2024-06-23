"use client";
{
  /* TODO: harusnya pas pesan udh dibaca, button mark as read ga bisa diteken*/
}
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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      getData();
      setToken(storedToken);
    } else {
      router.push("/");
    }
  }, []);

  async function getData() {
    setLoading(true);
    console.log("submit");
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/dashboard",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setData(data.data);
      } else {
        console.log(data);
      }
    } catch (error) {}
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  console.log(data);
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
                {
                  /* {data.total_visitors} */
                  data.statistic ? (
                    <div className="text-2xl font-bold">
                      {data.statistic.total_visitor}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">0</div>
                  )
                }
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
                {
                  /* {data.total_visitors} */
                  data.statistic ? (
                    <div className="text-2xl font-bold">
                      {data.statistic.total_message}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">0</div>
                  )
                }
                {/* TODO: ini masih statik */}
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
          {data.message.length != 0 ? (
            <Button asChild size="sm" className="ml-auto gap-1 mt-8">
              <Link href="./dashboard/messages">
                View All
                <ArrowRightCircle className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <> </>
          )}
        </div>

        {data.message.length != 0 ? (
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
            {data.message.map((item, index) => {
              return (
                <MsgCard
                  key={index}
                  question={"Question #" + item.id}
                  date={item.created_at}
                  message={item.content}
                  id={item.id}
                  refreshData={getData}
                />
              );
            })}
          </div>
        ) : (
          <div className="min-h-[100px] pt-10 pb-5 flex flex-col justify-center items-center">
            Belum ada pertanyaan
          </div>
        )}

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
                    <TableHead className="text-right">Total messages</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.leaderboard ? (
                    data.leaderboard.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                          </TableCell>
                          <TableCell className="text-right">
                            {item.messages_count}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <div>Belum ada pertanyaan</div>
                  )}
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
