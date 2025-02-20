import React from "react";

const ForgotPasswordForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
        <h1 className = "text-xl font-bold text-center pb-3">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input name = "ifsc" className = "border w-full border-gray-700 p-5" placeholder="enter your email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
            <Button type = "submit" className = "w-full py-5">
                Submit
            </Button>
          
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
