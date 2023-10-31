import {supabase} from "../supabase";
export async function signUpWithEmailAndPassword(e_mail, password, firstname, lastname) {
    const {data, error} = await supabase.auth.signUp(
        {
            email: e_mail,
            password: password,
            options: {
                data: {
                    first_name: firstname,
                    last_name: lastname,
                }
            }
        }
    )
    if (!error) {
        return "Your going to be redirect to the login but confirm the verification email first"
    } else {
        if (error.message.charAt(0) === "T") {
            return error.message;
        } else {
            return "User is not registered, check the email and password or your internet.";
        }
    }
}


export async function signInWithProviders(provider) {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://localhost:3000/dashboard'
            }
        })
        if (data){
            console.log(data)
            return data
        }else {
            return data
        }
    } catch (error){
        window.alert("Did not work")
    }
}

export async function LoginUserWithEmailAndPassword(email, password, dispMessage,ptrfunction) {
    const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        }
    )
    if (!error) {
        const sessionData = {
            token: data?.session,
        };
        document.cookie = `session=${encodeURIComponent(JSON.stringify(sessionData))};`;
        ptrfunction(true);
    } else {
        dispMessage(error.message);
    }
}