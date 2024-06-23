import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Loader2, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import React from "react";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import Dashboard from "@/app/dashboard/page";

export default function MsgCard({ question, date, message, id, refreshData }) {
  const [open, setOpen] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isReading, setIsReading] = React.useState(false);
  const { toast } = useToast()

  const handleButtonClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const showToast = (title, description) => {
    toast({
      title: title,
      description: description,
    })
  };


  const handleButtonDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `https://nakonapi.rizpedia.com/api/v1/message/${id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setOpen(false);
        showToast("Success", "Message deleted successfully");
        refreshData();
      } else {
        setOpen(false);
        showToast("Error", "Failed to delete message")
      }
    } catch (error) { }

    setIsDeleting(false);
  };

  const handleButtonRead = async () => {
    setIsReading(true);
    try {
      const response = await fetch(
        `https://nakonapi.rizpedia.com/api/v1/message/${id}`,
        {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setOpen(false);
        showToast("Success", "Message marked as read")
        refreshData()
      } else {
        setOpen(false);
        console.log(data.message)
        if (data.message == "Message already read") {
          showToast("Failed", "Message already read")
        }
        showToast("Failed", "Failed to mark message as read")
        refreshData()
      }
    } catch (error) {
      showToast("Error", "500 Internal Server Error")
    }
    setIsReading(false);
  }


  return (
    <Card x- chunk="dashboard-01-chunk-1" className="bg-secondary border-none" >
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
          More
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
              <Button className="w-1/2" onClick={handleButtonRead}>
                {isReading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Mark As Read"
                )}

              </Button>
              <Button variant="outlineDestructive" className="w-1/2" onClick={handleButtonDelete}>
                {isDeleting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Delete"
                )}

              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card >
  );
}
