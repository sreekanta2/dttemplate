import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export function DeleteSlots() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="text-destructive-700 cursor-pointer">Delete All</h1>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center text-center">
          <div className="w-full flex justify-center mb-4">
            <div className="w-[72px] h-[72px] border bg-destructive-700 rounded-full flex justify-center items-center">
              <X size={30} className="text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
            Remove Slots
          </h3>

          <p className="text-sm text-default-500  mt-3">
            Are you sure you want to remove this slots?
          </p>
        </div>
        <hr className="my-5 border-border" />
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="submit" variant="outline">
              {" "}
              Close{" "}
            </Button>
          </DialogClose>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
