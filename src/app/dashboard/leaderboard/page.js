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
function page() {
  return (
    <>
      <Navbar />
      <main className="p-5 md:px-[100px] xl:px-[250px]  pt-[100px] min-h-screen">
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
            <CardHeader className="flex flex-row items-center"></CardHeader>
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
          </Card>{" "}
        </div>
      </main>
      <CustomFooter />
    </>
  );
}

export default page;
