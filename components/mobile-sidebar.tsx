"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

export default function MobileSidebar() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        console.log(123);
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                {/* <Button variant="ghost" size="icon" className="md:hidden"> */}
                <Menu className="md:hidden" />
                {/* </Button> */}
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}
