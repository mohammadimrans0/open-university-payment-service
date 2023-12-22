/*
  Warnings:

  - You are about to drop the column `paymentGetewayData` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "paymentGetewayData",
ADD COLUMN     "paymentGatewayData" JSONB;
