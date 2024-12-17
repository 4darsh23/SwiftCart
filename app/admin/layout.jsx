"use client";

import Sidebar from "./components/Sidebar";


export default function layout ({children}) 
{
    return ( <main className="flex">
        <Sidebar/> <section className="flex-1"> {children }  </section>   
    </main>)
}