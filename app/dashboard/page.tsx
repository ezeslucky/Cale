
import { requireUser } from '../lib/hooks'

export default async function DashboardPage() {
  
  const session = await requireUser()

  return (
    <div>
      hello from dashboard
    </div>
  )
}




