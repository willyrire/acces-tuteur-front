import React from "react";
import warningText from "@/assets/warning-text.json";
import Warning from "@/components/HeaderObject/Warning";

const LoadedAsset = (showWarning) => {
    // 1. Est-ce que l'utilisateur a vérifié son email ?
    const isEmailVerified = localStorage.getItem("isEmailVerified") === "true";
    // 2. Charger les messages d'avertissement depuis le fichier JSON
    const emailNotVerifiedMessage = warningText.email_not_verified.text;
    const emailHasButton = warningText.email_not_verified.hasButton;
    const emailButtonText = warningText.email_not_verified.buttonText;
    const emailButtonTextMobile = warningText.email_not_verified.buttonTextMobile;
    const emailTargetOnClick = warningText.email_not_verified.targetFunction;

    return (
        <>
    {!isEmailVerified && (
        <Warning
            isMobile={false}
            message={emailNotVerifiedMessage}
            hasButton={emailHasButton}
            buttonText={emailButtonText}
            buttonTextMobile={emailButtonTextMobile}
            showWarning={showWarning}
            // rajouter la fonction
            // buttonTargetFunction=
        />
    )}
        </>
    )
}

export default LoadedAsset;
