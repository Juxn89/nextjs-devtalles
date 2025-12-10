export interface User {
id: string,
name: string,
email: string,
emailVerified?: boolean,
emailVerificationDate?: Date | null,
password: string,
role: string,
image?: string | null,
}