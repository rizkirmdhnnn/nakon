"use client";
import CustomFooter from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

async function getLeaderboard() {
  const response = await fetch(
    "https://nakonapi.rizpedia.com/api/v1/leaderboard",
  );
  const data = await response.json();
  return data;
}

function Page() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await getLeaderboard();
        setLeaderboardData(data.data || []);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        setLeaderboardData([]);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

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
      <main className="p-5 md:px-[100px] xl:px-[250px] pt-[100px] min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <p className="text-base md:leading-10 leading-[20px]">
              User with the most messages
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          <Card className="col-span-4" x-chunk="dashboard-01-chunk-4">
            <CardContent>
              <Table className="mt-7">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Messages Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium">{item.name}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        {item.messages_count}
                      </TableCell>
                    </TableRow>
                  ))}
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

export default Page;

