import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();


async function createUser() {
    await client.user.create ({
        data: {
            id: 123,
            username: "Ashiq",
            password: "123123",
            age: 18
        }
    })
}

createUser();
