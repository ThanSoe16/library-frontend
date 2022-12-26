import React from 'react'
import { useAuthStore } from '@/lib/zustandAuth'
import { Redirect } from '@/utils/Redirect'

const ProtectRoute = ({ children, routeType }) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect to="/auth/login" />
  }
  switch (routeType) {
    case 'user':
      if (user.role !== 'user') {
        return <Redirect to="/403" />
      }
      break
    case 'systemAdmin':
      if (user.role !== 'systemAdmin') {
        return <Redirect to="/403" />
      }
      break
    default:
      return <Redirect to="/404" />
  }

  return children
}

export default ProtectRoute
