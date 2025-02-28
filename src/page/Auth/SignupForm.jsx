import React from "react";

const SignupForm = () => {

  const dispatch = useDispatch()
  
  const form = useForm({
    resolver: "",
    defaultValues: {
    fullName: "",
    
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(register(data))
    console.log(data);
  };
  
  return (
    <div>
        <h1 className = "text-xl font-bold text-center pb-3">Create New Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                
                <FormControl>
                  <Input className = "border w-full border-gray-700 p-5" placeholder="code with zosh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input name = "ifsc" className = "border w-full border-gray-700 p-5" placeholder="codewithzosh@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className = "border w-full border-gray-700 p-5" placeholder="your password" {...field} />
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

export default SignupForm;
