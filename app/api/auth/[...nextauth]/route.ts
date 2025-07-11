import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        {
            id: "mandataire",
            name: "Mandataire",
            type: "oauth",
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            wellKnown: process.env.OAUTH_WELL_KNOWN,
            authorization: {
                params: {
                    scope: "openid profile email supann",
                },
            },
            checks: ["pkce", "state"],
            idToken: true,
            client: {
                token_endpoint_auth_method: "client_secret_post",
            },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name ?? null,
                    email: profile.email ?? null,
                    sub: profile.sub,
                    eduPersonPrincipalName: profile.eduPersonPrincipalName ?? null,
                    iss: profile.iss ?? null,
                }
            },
        },
    ],
    debug: true,
    callbacks: {
        async jwt({ token, account, profile }: {
            token: any
            account?: any
            profile?: any
        }) {
            if (account && profile) {
                token.sub = profile.sub
                token.name = profile.name ?? null
                token.email = profile.email ?? null
                token.iss = profile.iss ?? null
                token.eduPersonPrincipalName = profile.eduPersonPrincipalName ?? null
            }
            // Call the back end to get user roles to persist in the token
            // TODO
            return token
        },
        async session({ session, token }: {
            session: any
            token: any
        }) {
            session.user.sub = token.sub
            session.user.name = token.name
            session.user.email = token.email
            session.user.iss = token.iss
            session.user.eduPersonPrincipalName = token.eduPersonPrincipalName
            session.user.roles = (token.roles || []) as string[]
            // Call the back end to get user roles to persist in the token
            // TODO
            return session
        }
    }
})

export { handler as GET, handler as POST }