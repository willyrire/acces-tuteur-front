import React from "react";
import Header from "../../components/Header/Header";
function LoginPage() {
    return (
        <div className="flex flex-col">
            <Header isAuth={false} minimalist={true} />
        </div>
    );
};

export default LoginPage;