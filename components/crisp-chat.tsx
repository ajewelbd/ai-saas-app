"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export function CrispChat() {
    useEffect(() => {
        Crisp.configure("94f26aed-f42f-4463-b13d-ed928ce0afa7");
    }, []);

    return null;
}