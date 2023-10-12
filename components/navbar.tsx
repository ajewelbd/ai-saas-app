import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { getLimit } from "@/lib/api-limit";

export default async function Navbar() {
    const apiLimit = await getLimit();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimit} />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
