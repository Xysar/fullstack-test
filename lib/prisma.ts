import { Prisma, PrismaClient } from "@prisma/client";
import {
  DefaultArgs,
  PrismaClientOptions,
} from "@prisma/client/runtime/library";

let prisma: PrismaClient<PrismaClientOptions, never, DefaultArgs>;

prisma = new PrismaClient();

export default prisma;
