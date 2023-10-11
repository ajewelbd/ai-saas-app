import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const limit: number = await getLimit();

    if(limit) {
        await prismadb.userApiLimit.update({
            where: { userId },
            data: { count: limit + 1}
        })
    } else {
        await prismadb.userApiLimit.create({
            data: { userId, count: 1 }
        })
    }
}

export const getLimit = async (): Promise<number> => {
    const { userId } = auth();

    if (!userId) return 0;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: { userId }
    })

    return userApiLimit ? userApiLimit.count : 0;
}

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const limit: number = await getLimit();

    return (!limit || limit < MAX_FREE_COUNTS)
}