"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "User One",
        avatar: "O",
        title: "Software Engineer",
        description: "This an awesome AI tool"
    },
    {
        name: "User Two",
        avatar: "T",
        title: "UI/UX Deginer",
        description: "You can try it"
    },
    {
        name: "User Three",
        avatar: "H",
        title: "Busnessman",
        description: "You can optimize daily task"
    },
    {
        name: "User Four",
        avatar: "F",
        title: "CEO",
        description: "It can generate video also. Nice!"
    }
]

export function LandingConent() {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.description} className="bg-[#192339] border-none text-white">
                        <CardHeader className="p-3">
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{testimonial.name}</p>
                                    <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0 text-xs italic">
                                {testimonial.description}...
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}