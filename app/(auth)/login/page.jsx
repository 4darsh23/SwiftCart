"use client"; 

import { auth } from "@/lib/firebase";
import { Button } from "@nextui-org/react";
import { AuthCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";


export default  function page() {
    return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:py-20 min-h-screen">
        
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">            
               <img className="h-14" src="/logo.png" alt="Logo"/>
               </div>
               <div className="flex flex-col gap-3 bg-white md:p-6 p-4 rounded-xl md:min-w-[440px] w-full">
                <h1 className="font-semibold text-xl">
                    Login with Email
                </h1>
                <form className="flex flex-col gap-3">
                    
                        <input
                        placeholder="Enter Your Email"
                         type="email"
                          name=" user-email" 
                           id = "user-email" 
                           className="px-3 py-2 rounded border focus:outline-none  w-full"
                           />
                            <input
                        placeholder="Enter UserPassword"
                         type="password"
                          name=" user-password" 
                           id = "user-password" 
                           className="px-3 py-2 rounded border focus:outline-none  w-full"
                           />
                    <Button color="secondary">
                        Login
                    </Button>
                    
                </form>
                <div className="flex justify-between">
                    <a href={'/Sign-up'}>
                        <button className="font-semibold text-blue-500">
                            New? Create account 
                        </button>
                        </a>
                        <a href={'/forget-password'}>
                        <button className="font-semibold text-blue-500">
                            Forget-Password?
                        </button>
                        </a>
                   
                </div>
              <hr/>
              <SignInWithGoogleComponent/>     
               </div>
                 
            </section>
        
    </main>
    );
}



function SignInWithGoogleComponent () {
    const  [ isLoading, setIsLoading] = useState(false);
   
    const handleLogin =  async () => { setIsLoading (true)

        try {  
            const user = await signInWithPopup(auth, new GoogleAuthProvider ());  
            
        } catch (error) {
            toast.error(error?.message);
        }
setIsLoading(false);

    };
   
   return  <Button isLoading = {isLoading} isDisabled={isLoading} onClick={handleLogin}>   
    Sign In With Google
  </Button>        

}