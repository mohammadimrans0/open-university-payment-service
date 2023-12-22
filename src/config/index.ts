/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  ssl: {
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD,
    sslPaymentUrl: process.env.SSL_BASE_PAYMENT_URL,
    sslValidationUrl: process.env.SSL_BASE_VALIDATION_URL,
  },
}
