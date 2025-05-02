import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { logout } from "@/store/slices/auth.slice";
import { RootState } from "@/store/types";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserIcon from "../icons/User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LoginForm } from "./LoginForm";

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const name = useSelector((s: RootState) => s.auth.user?.name);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
  };
  return (
    <>
      {name ? (
        <Link href={"/login"}>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer flex flex-col items-center">
              {" "}
              <UserIcon />
              {name}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="cursor-pointer">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <Link href={"/"}>
                <DropdownMenuItem
                  className="cursor-pointer bg-red-600 text-white duration-300"
                  onClick={() => Logout()}
                >
                  chiqish
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="flex flex-col items-center text-xs sm:text-sm"
        >
          <UserIcon />
          Login
        </div>
      )}
      <Dialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <LoginForm
            onClose={(open) => {
              setOpen(open);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
