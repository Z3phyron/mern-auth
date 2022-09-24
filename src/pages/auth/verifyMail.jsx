import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const VerifyMail = () => {
     const {  isLoading, isError, isSuccess, message } = useSelector(
       (state) => state.auth
     );

    const params = useParams()
      const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const token = params.token

        dispatch()

    }, [])
    

  return (
    <div>VerifyMail</div>
  )
}

export default VerifyMail