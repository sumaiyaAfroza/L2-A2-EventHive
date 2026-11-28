import z from "zod";

export const ROLES = ["attendee", "organizer"] as const
export const roleSchema = z.string()
                          .trim()
                          .toLowerCase()
                          .optional()
                          .transform( value => value === '' ? undefined: value )
                          .pipe(z.enum(ROLES, {error: "Role must be attendee or organizer"}).default("attendee"))


const signupSchema = z.object({
    name: z.string().trim().min(1,'name is required'),
     email: z.string().trim().min(1,'email is required').toLowerCase(),
     password: z.string().min(1, 'password is reqired'),
     role: roleSchema
})


export type RegisterData = z.infer<typeof signupSchema>