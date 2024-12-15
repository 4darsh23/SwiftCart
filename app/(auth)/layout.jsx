"use client"

import AuthContextProvider from "@/context/AuthContext"

export default function Layout({children}) {
    return <AuthContextProvider>
        {children}
    </AuthContextProvider>
}
