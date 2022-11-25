import { useRouter } from 'next/router'
import React from 'react'

function Post() {
    const router = useRouter()
    const {sno} = router.query
  return (
    <div>post :  {sno}</div>
  )
}

export default Post