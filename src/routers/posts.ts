import { Router } from 'express'
import { verifyToken } from '../utils/jwt/verifyToken'

const router = Router()

router.get('/',verifyToken , async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router