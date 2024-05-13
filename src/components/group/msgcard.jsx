import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, X } from "lucide-react";
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import React from "react";

export default function MsgCard({ question, date, message, id }) {
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
    console.log(open);
  };
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
        <p className="text-1xl text-muted-foreground line-clamp-2">{message}</p>
      </CardContent>
      <CardFooter className="float-end">
        <Button onClick={handleButtonClick}>
          Selengkapnya
          {/* <Link href={`#${id}`}>Selengkapnya</Link> */}
        </Button>
      </CardFooter>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between items-center">
              <div>
                <AlertDialogTitle>{question}</AlertDialogTitle>
              </div>
              <X className="w-4 cursor-pointer" onClick={handleButtonClick} />
            </div>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Tandai Sudah Dibaca</AlertDialogCancel>
            <AlertDialogAction>Hapus</AlertDialogAction> */}
            <div className="flex justify-between w-full gap-3">
              <Button className="w-1/2">Tandai Sudah Dibaca</Button>
              <Button variant="outlineDestructive" className="w-1/2">
                Hapus
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
