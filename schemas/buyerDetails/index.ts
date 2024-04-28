import { z } from "zod";


export const formSchema = z.object({
    fullName: z.string().min(2, { message: "Full name is required" })
    ,
    email: z.string().email("Invalid email address"),  
    mobileNumber: z.string(), // Treat mobileNumber as a string
    pincode: z.string().min(6,{ message: 'Minimum 6 is required' }), // Treat pincode as a string
    state: z.string().optional(),
    address: z.string(),
    date: z.coerce.date(), // Treat date as a date
    country: z.string().optional(),
    cityName: z.string().optional(),
    landmark: z.string(),
    others: z.string(),
    gstin: z.string(),
    companyName: z.string().min(1, "Company name is required"),
  });

  type formSchema = z.infer<typeof formSchema>;

