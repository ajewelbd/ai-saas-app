import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

import { MAX_FREE_COUNTS } from "@/constants";
import { UserApiLimit } from "@prisma/client";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const limit: UserApiLimit | false = await getLimit();

    if(limit) {
        await prismadb.userApiLimit.update({
            where: { userId },
            data: { count: limit.count + 1}
        })
    } else {
        await prismadb.userApiLimit.create({
            data: { userId, count: 1 }
        })
    }
}

const getLimit = async (): Promise<UserApiLimit | false> => {
    const { userId } = auth();

    if (!userId) return false;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: { userId }
    })

    return userApiLimit || false;
}

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const limit: UserApiLimit | false = await getLimit();

    return (!limit || limit.count < MAX_FREE_COUNTS)
}