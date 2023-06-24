import app from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
    const provider = new GoogleAuthProvider();

    const googleSignin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
            console.log(user)

        })

        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="flex justify-center">
            <h1>login</h1>
            <button onClick={googleSignin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GOOGLE</button>
            
        </div>
    );
};

export default Login;