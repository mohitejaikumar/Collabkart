import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, TextField } from "@mui/material";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import { getCsrfToken, signIn } from "next-auth/react"
import { Controller, useForm } from "react-hook-form";
import { SignInParams, SignInSchema } from "../../../zod/form";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function SignIn(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter();

    const { control, handleSubmit, setError } = useForm<SignInParams>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            Email: "",
            Password: "",
        }
    });

    async function onSubmit(data) {
      
        try {
            const res = await axios.post("/api/me", data);
            console.log(res);
            if (res.data.messageType == "zodError") {
                let zodError = res.data.message;
                Object.keys(zodError).forEach((key) => {


                    if (key === "Email") {
                        setError("Email", zodError[key]);
                    }
                    if (key === "Password") {
                        setError("Password", zodError[key]);
                    }
                })
            }

            if (res.data.messageType == "ok") {

                // passes csrfToken 
                data.csrfToken = props.csrfToken;
                const rest = await signIn("credentials", {
                    ...data,
                    redirect: false
                })
                // checks if it is valid user
                if (!(rest?.ok)) {
                    setError("Password",{message:"Wrong Password"});
                    console.log("error");
                    console.log(rest);
                }
                else {
                    router.push("/");
                }
            }

        }
        catch (error) {
            if ((error instanceof AxiosError)) {
                alert("Form not submitted Successfully!!");
            }
        }
    }

    return (

        <div id="signin-page">
            <Card id="signin-card">
                <img src="/influencer.png" alt="Logo" className="logo-image" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="Email"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({
                            field: { onChange, value, ref },
                            fieldState: { error },
                            formState,
                        }) => (
                            <TextField
                                required
                                name="Email"
                                id={"outlined-required"}
                                helperText={error ? error.message : null}
                                size={"medium"}
                                error={!!error}
                                fullWidth={true}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                                label="Email"
                                margin={"normal"}
                            />
                        )}
                    >

                    </Controller>
                    <Controller
                        name="Password"
                        control={control}
                        render={({
                            field: { onChange, value, ref },
                            fieldState: { error },
                            formState,
                        }) => (
                            <TextField
                                required
                                name="Password"
                                type="password"
                                helperText={error ? error.message : null}
                                id={"outlined-required"}
                                error={!!error}
                                size={"medium"}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                                fullWidth={true}
                                label="Password"
                                margin={"normal"}
                            />
                        )}
                    >

                    </Controller>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth={true}
                        className="signin-button"
                        onClick={() => { console.log("hi"); }}
                    >SignIn</Button>
                </form>
            </Card>
        </div >
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    let csrf: string | null | undefined = await getCsrfToken(context);
    if (csrf === undefined) {
        csrf = null;
    }
    return {
        props: {
            csrfToken: csrf,
        },
    }
}