-- CreateTable
CREATE TABLE "public"."employee" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "isadmin" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
