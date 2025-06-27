import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

const handler = NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            issuer: process.env.AUTH0_ISSUER
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            const namespace = process.env.NEXTAUTH_URL
            if (account?.id_token) {
                const idTokenPayload = JSON.parse(
                    Buffer.from(account.id_token.split('.')[1], 'base64').toString()
                )
                token.roles = idTokenPayload[`${namespace}/roles`] || []
            }

            return token
        },
        async session({ session, token }) {
            const roles = (token.roles || []) as string[]
            session.user.roles = roles
            return session
        }
    }
})

export { handler as GET, handler as POST }