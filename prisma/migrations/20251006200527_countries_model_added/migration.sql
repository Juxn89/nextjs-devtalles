-- CreateTable
CREATE TABLE "public"."Countryies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Countryies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Countryies_name_key" ON "public"."Countryies"("name");
