import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

function Redirect({ to }) {
  const Router = useRouter()

  useEffect(() => {
    Router.push(to).then()
  }, [to])

  //todo change loading spinner
  return <div>Loading...</div>
}

export { Redirect }
