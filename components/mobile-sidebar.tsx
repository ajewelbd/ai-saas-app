"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

type SidebarProps = {
    apiLimitCount: number
}

export default function MobileSidebar({ apiLimitCount }: SidebarProps) {
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
                <Sidebar apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet>
    );
}
