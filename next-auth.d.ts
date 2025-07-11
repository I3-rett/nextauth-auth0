import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      roles?: string[]
      sub?: string
      iss?: string
      eduPersonPrincipalName?: string
    }
  }

  interface User {
    roles?: string[]
    sub?: string
    iss?: string
    eduPersonPrincipalName?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles?: string[]
    sub?: string
    iss?: string
    eduPersonPrincipalName?: string
  }
}
