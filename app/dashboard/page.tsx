import React from 'react'
import { auth } from '../lib/auth'

import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  if(!session){
    return redirect("/")
  }
  return (
    <div>
      dashboard
    </div>
  )
}


