import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function MsgCard({ question, date, message, id }) {
  return (
    <Card x-chunk="dashboard-01-chunk-1" className="bg-secondary border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">
          {question}
          <div className="flex items-center">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <p className="text-xs font-medium ps-1">{date}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-1xl text-muted-foreground">{message}</p>
      </CardContent>
      <CardFooter className="float-end">
        <Button>
          <Link href={`#${id}`}>Selengkapnya</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
