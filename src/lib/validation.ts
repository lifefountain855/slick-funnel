import { z } from "zod"

export const leadSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required"),
  contactName: z.string().trim().min(1, "Contact name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required"),
  website: z.string().trim().optional(),
  industry: z.string().trim().min(1, "Industry is required"),
  // city: z.string().trim().min(1, "City or service area is required"),
  preferredContactMethod: z.string().trim().optional(),
})

export const contactSchema = leadSchema.extend({
  message: z.string().trim().min(1, "Message is required"),
})
