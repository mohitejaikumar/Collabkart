

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { user } from "../../../store/atoms/user";
import { isLoading } from "../../../store/atoms/isLoading";


export default function Appbar() {

    const { data: session } = useSession();
    const router = useRouter();
    const setUser = useSetRecoilState(user);
    const setIsLoading = useSetRecoilState(isLoading);

    async function SignOut() {
        setUser(null);
        setIsLoading(true);
        await signOut();
        setIsLoading(false);
        router.push('/');
    }

    if (session) {
        const name = session.user?.name!;
        setUser(name);
    }

    return (
        <div className="nav-bar">
          <div className="home-button" onClick={() => { router.push('/') }}>CollabKart</div>
          <div className="tabs">
            <div className="brand-tab" onClick={() => { /* Handle click action */ }}>For Brands</div>
            <div className="influencer-tab" onClick={() => { /* Handle click action */ }}>For Creators</div>
          </div>
          <div className="nav-bar-button">
            {!session && (
              <>
                <button className="button" onClick={() => signIn()}>Sign In</button>
              </>
            )}
            {session && (
              <div className="nav-bar-button">
                <button className="button" onClick={() => { router.push('/registration') }}>
                  Registration
                </button>
                <button className="button" onClick={() => { SignOut() }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      );
}

