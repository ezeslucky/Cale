import React from 'react'
import { requireUser } from '../lib/hoosk'

export default async function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await requireUser()
  return (
    <div>
      dashboard
    </div>
  )
}


