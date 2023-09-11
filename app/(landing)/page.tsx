import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Landing Page</h1>
            <Link href="/sign-in">
                <Button>Sign In</Button>
            </Link>
            <Link href="/sign-up">
                <Button>Register</Button>
            </Link>
        </>
    );
}
