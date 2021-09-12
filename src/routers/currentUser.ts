import { Router } from 'express'
import { findById } from '../application/user/usecase/findById'
import { verifyToken } from '../utils/jwt/verifyToken'

const router = Router()

router.get('/',verifyToken , async (req, res) => {
  try {
    const user = await findById({id: req.user.id})
    if(!user) {
      res.status(404).json('no user')
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router