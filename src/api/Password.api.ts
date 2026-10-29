import { getUserToken } from "@/lib/auth";




export const handleForgotPassword = async (email: string) => {

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response
}

export const handleVerifyCode = async (resetCode: string) => {

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {
        method: "POST",
        body: JSON.stringify({ resetCode: resetCode }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response
}

export const handleRestPass = async (email: string, newPassword: string) => {

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, {
        method: "PUT",
        body: JSON.stringify({ email: email, newPassword: newPassword }),
        headers: {
            "Content-Type": "application/json"
        }
    })



    return response
}

