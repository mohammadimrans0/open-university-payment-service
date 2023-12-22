import express from 'express'
import { paymentRoutes } from '../modules/payment/payment.routes'

const router = express.Router()

const moduleRoutes = [
  // ... routes
  {
    path: '/payment',
    routes: paymentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))
export default router
