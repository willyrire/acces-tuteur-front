import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import passwordResetRequest from "@/api/auth/passwordResetRequest";
import { fastRedirect } from "@/utils/tools/fastRedirect";

function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [message, setMessage] = useState("");

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if(!token){ // Si pas de token, rediriger
        fastRedirect("/auth/password-recovery");
    }

    return (
        <>
        caca
        </>
    )

}

export default ResetPasswordPage;