import React from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator } from "@/components/ui/input-otp";
import { useState } from "react";

const AccountVerificationForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-5 mt-10 w-full">
        <div className="flex justify-between items-center">
          <p>Email : </p>
          <p>codewithzosh@gmail.com</p>
          <Dialog>
            <DialogTrigger>
              <Button>Sent OTP</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="py-5 flex gap-10 justify-center items-center">
                <InputOTP onChange = {() => setValue(value)} maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <DialogClose>
                  <Button onClick = {handleSubmit} className = {"w-[10rem]"}>
                    submit
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      AccountVerificationForm
    </div>
  );
};

export default AccountVerificationForm;
