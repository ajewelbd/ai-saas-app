import Image from "next/image";

type EmptyPops = {
    label: string;
};

export default function Empty({ label }: EmptyPops) {
    return (
        <div className="h-full p-20 flex flex-col items-center justtify-center">
            <div className="relative h-72 w-72">
                <Image alt="No Messages!" fill src="/empty_conversation.png" />
            </div>
            <p className="text-muted-foreground text-sm text-center">{label}</p>
        </div>
    );
}
