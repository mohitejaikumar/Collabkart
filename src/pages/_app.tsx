
import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Appbar from './components/Appbar'
import '../styles/app.css'
import type { NextComponentType } from 'next' //Import Component type
import { ReactNode, useEffect, useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { isLoading } from '../../store/atoms/isLoading'
import Loading from './components/Loading'


//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean } // add auth type
}

interface Props {
  children?: ReactNode
}


export default function App({ Component, pageProps, router }: CustomAppProps) {


  return (
    <RecoilRoot>
      <App2 pageProps={pageProps} Component={Component} router={router} />
    </RecoilRoot>

  )
}
function App2({ Component, pageProps }: CustomAppProps) {
  /// This code solve hydration issue
  let loading = useRecoilValue(isLoading);
 
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <SessionProvider session={pageProps.session}>
      <Appbar></Appbar>

      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}

    </SessionProvider>
  )
}

function Auth({ children }: Props) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return (
      
        <Loading></Loading>
      
    )
  }

  return children
}


