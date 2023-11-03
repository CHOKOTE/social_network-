
import * as z from 'zod'

export const SignUpValidation = z.object({
    name:z.string().min(2,{message:"name is required "}),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email:z.string().email({message:'please send correct email sir or mistress'}),
    password:z.string().min(8,{message:"password must be at least 8 caracters"})
  })

  export const SignInValidation = z.object({
    email:z.string().email({message:'please send correct email sir or mistress'}),
    password:z.string().min(8,{message:"password must be at least 8 caracters"})
  })