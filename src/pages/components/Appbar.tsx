

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
            <div className="home-button" onClick={() => { router.push('/') }}>LevelUp</div>
            <div className="tabs">
                <div className="tab">For Brands</div>
                <div className="tab">For Creators</div>
            </div>
            {!session && <button className="button" onClick={() => signIn()}>SignIn</button>}
            {session &&
                <div className="nav-bar-button">
                    <button className="button" onClick={() => { router.push('/registration') }}>
                        Registration
                    </button>
                    <button className="button" onClick={() => {SignOut()}}>
                        SignOut
                    </button>
                </div>
            }
        </div>
    )
}

