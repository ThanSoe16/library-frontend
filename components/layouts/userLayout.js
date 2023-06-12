import ProtectRoute from '../ProtectRoute'
import { globalStyles } from '../../styles/globalStyles'
import UserHeader from '../header/userHeader'
import userRoute from 'routes/userRoute'
import Footer from '../footer/footer'
import { auto } from '@popperjs/core'

export default function UserLayout({ children, title = 'User' }) {
  return (
    <ProtectRoute routeType="user">
      {globalStyles}

      <main style={{ overflowX: 'hidden', overflowY: 'auto' }}>
        <UserHeader routes={userRoute} />
        {children}
        <Footer />
      </main>
    </ProtectRoute>
  )
}
