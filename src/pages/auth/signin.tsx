import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { Card, Button, Typography } from "@mui/material"


export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  

  return (
    <div id="signin-page">

      <Card variant="outlined" id="signin-card">

        <center>
          <img src="/influencer.png"  alt="Logo" className="logo-image" />
        
          {Object.values(providers).map(provider => (

            <div key={provider.id} id="all-providers">
              <Button
                variant="outlined"
                onClick={() => {
                  signIn(provider.id);
                  
                }}
                fullWidth={true}
                style={{display: "flex",justifyContent: "space-evenly"}}
              >
                <img
                  src={`/${provider.name}_icon.png`}
                  className="provider-icon"
                  alt="face_book_logo"
                />

                <text className="provider-name">Continue with {provider.name}</text>
              </Button>
              <br />
            </div>
          ))}

        </center>
      </Card>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  console.log(session);
  if (session) {
    return { redirect: { destination: "/registration" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}