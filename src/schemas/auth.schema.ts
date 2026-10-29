import z, { email, object } from "zod";

export const RegisterSchema = z.object({
    name : z.string()
    .nonempty("*Please enter your name")
    .min(3 , "*Name is too short"),
   

    email : z.string()
    .nonempty("*Please enter your email")
    .email("*Invalid email address"),

    password : z.string()
    .min(8 , "*Password must be at least 8 characters long")
    .nonempty("*Please enter your password")
    .regex(/[A-Z]/ , "*Password must contain at least one uppercase letter")
    .regex(/[a-z]/ , "*Password must contain at least one lowercase letter")
    .regex(/[0-9]/ , "*Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/ , "*Password must contain at least one special character"),

    rePassword : z.string()
    .nonempty("*Please confirm your password"),

    phone : z.string()
    .nonempty("*Please enter your phone number")
    .regex(/^01[0125][0-9]{8}$/ , "*Only Egyptian phone numbers are allowed"),

    terms : z.boolean()
    .refine((val)=> val === true , {
        error : "*You must accept the terms and conditions"
    }),



}).refine((object)=>object.password===object.rePassword ,
    {path : ["rePassword"] ,
     error: "Passwords do not match"
    }
)

export type RegisterSchemaType = z.infer<typeof RegisterSchema>


////////////////////////LogIn Schema////////////////////////////////

export const LoginSchema = z.object({
    email : z.string()
    .nonempty("*Email is required")
    .email("*Invalid email address"),

    password : z.string()
    .min(8 , "*Password must be at least 8 characters long")
    .nonempty("*Password is required")
    .regex(/[A-Z]/ , "*Password must contain at least one uppercase letter")
    .regex(/[a-z]/ , "*Password must contain at least one lowercase letter")
    .regex(/[0-9]/ , "*Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/ , "*Password must contain at least one special character"),

    })




export type LoginSchemaType = z.infer<typeof LoginSchema>



//////////////////Forget Schema////////////////
export const ForgotPasswordSchema = z.object({
email: z.string()
.nonempty("*Email is required")
.email("*Invalid email address"),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;


///////////////VerifyCOde//////////////////////////


export const VerifyCodeSchema = z.object({
resetCode: z.string()
.nonempty("Reset code is required")
.length(6,"Reset code must be 6 digits")
});
export type VerifyCodeSchemaType = z.infer<typeof VerifyCodeSchema>;

/////////////////NewPassword////////////////

export const newPasswordSchema = z.object({

newPassword: z.string()
    .min(8 , "*Password must be at least 8 characters long")
    .nonempty("*Password is required")
    .regex(/[A-Z]/ , "*Password must contain at least one uppercase letter")
    .regex(/[a-z]/ , "*Password must contain at least one lowercase letter")
    .regex(/[0-9]/ , "*Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/ , "*Password must contain at least one special character"),

    rePassword : z.string()
    .nonempty("*Please confirm your password"),
}).refine((object)=>object.newPassword===object.rePassword ,
    {path : ["rePassword"] ,
     error: "Passwords do not match"
    }
)
export type newPasswordSchemaType = z.infer<typeof newPasswordSchema>;



////////////////Adress Data/////////////////////

export const addAddressSchema = z.object({
name: z.string().
nonempty("Adress Name is required"),


details:  z.string().
 nonempty("Adress details are requires").
min(10 , "Adress details must contain at least 10 characters"),

phone: z.string()
.nonempty("*Please enter your phone number")
.regex(/^01[0125][0-9]{8}$/ , "*Only Egyptian phone numbers are allowed"),


city: z.string()
 .nonempty("City is Required"),
});

export type addAddressSchemaType = z.infer<typeof addAddressSchema>;


///////////////Logged user data/////////////////
export const loggedUserDataSchema = z.object({
   name : z.string()
    .nonempty("*Please enter your name")
    .min(3 , "*Name is too short"),
   

    email : z.string()
    .nonempty("*Please enter your email")
    .email("*Invalid email address"),

    phone : z.string()
    .nonempty("*Please enter your phone number")
    .regex(/^01[0125][0-9]{8}$/ , "*Only Egyptian phone numbers are allowed"),


}
)
export type loggedUserDataSchemaType = z.infer<typeof loggedUserDataSchema>;



/////////////Update Logged User Password/////////////////
export const loggedUserUpdatePasswordSchema = z.object({
    currentPassword :z.string()
    .min(8 , "*Password must be at least 8 characters long")
    .nonempty("*Password is required")
    .regex(/[A-Z]/ , "*Password must contain at least one uppercase letter")
    .regex(/[a-z]/ , "*Password must contain at least one lowercase letter")
    .regex(/[0-9]/ , "*Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/ , "*Password must contain at least one special character"),

    password: z.string()
    .min(8 , "*Password must be at least 8 characters long")
    .nonempty("*Password is required")
    .regex(/[A-Z]/ , "*Password must contain at least one uppercase letter")
    .regex(/[a-z]/ , "*Password must contain at least one lowercase letter")
    .regex(/[0-9]/ , "*Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/ , "*Password must contain at least one special character"),

    rePassword : z.string()
    .nonempty("*Please confirm your password"),
}).refine((object)=>object.password===object.rePassword ,
    {path : ["rePassword"] ,
     error: "Passwords do not match"



}
)
export type loggedUserUpdatePasswordSchemaType = z.infer<typeof loggedUserUpdatePasswordSchema>;

///////////////////address In Checkout////////////

export const addAddressInCheckoutSchema = z.object({
    city: z.string()
 .nonempty("City is Required"),

details:  z.string().
 nonempty("Adress details are requires").
min(10 , "Adress details must contain at least 10 characters"),

phone: z.string()
.nonempty("*Please enter your phone number")
.regex(/^01[0125][0-9]{8}$/ , "*Only Egyptian phone numbers are allowed"),

postalCode : z.string()


});

export type addAddressInCheckoutSchemaType = z.infer<typeof addAddressInCheckoutSchema>;


//////////////////////////Contact//////////////////////////

export const contactSchema = z.object({
    fullname: z.string()
 .nonempty("Name is Required"),

email:  z.string().
 nonempty("Adress details are requires").
 email("Not valid email"),

message: z.string()
.nonempty("*Please enter your message")



});

export type contactSchemaType = z.infer<typeof contactSchema>;



