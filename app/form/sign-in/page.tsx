"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInValidation, SignUpValidation } from './../../../lib/validation/index';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"




export default function SiginForm() {
  
  const router = useRouter();


  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof SignInValidation>) {
    console.log(values)
  }

  return (
    <Form {...form} >
      <div className="flex flex-col justify-center items-center x:w-300   gap-0 ">
        <div className="flex justify-start">
          <img src={'/images/logo.svg'} alt="the logo of website" />
        </div>
        <h2 className="text-[30px] font-bold leading-[140%] tracking-tighter text-white float-right inline ">Create a new account</h2>
        <h4 className="text-light-4 text-center">To use snapgram, Please enter your details</h4>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  w-full">
         
         <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} className="
                  h-12  bg-dark-4  placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1
                   ring-offset-light-3 rounded-lg  text-white 
                   border-none   focus:outline-none  w-full  sm:text-sm focus:ring-1
                   " />
                </FormControl>
               <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} className="
                  h-12  bg-dark-4  placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1
                   ring-offset-light-3 rounded-lg  text-white 
                   border-none   focus:outline-none  w-full  sm:text-sm focus:ring-1
                   " />
                </FormControl>
               <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <Button type="submit" className=" h-12 w-full cursor-pointer bg-primary-500 
           hover:tracking-wide hover:bg-gradient-to-r from-indigo-500">Submit</Button>
           <div className="flex gap-1">
             <h4 className="text-white">don't have an account?</h4> 
             <Link href={'/form/sign-up'} className="text-primary-600">Sign Up</Link>
           </div>
        </form>
      </div>
    </Form>
  )
}


