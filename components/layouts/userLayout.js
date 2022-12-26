import ProtectRoute from '../ProtectRoute'
import { globalStyles } from '../../styles/globalStyles'
import UserHeader from '../header/userHeader'
import userRoute from 'routes/userRoute'
import Footer from '../footer/footer'

export default function UserLayout({ children, title = 'User' }) {
  return (
    <ProtectRoute routeType="user">
      {globalStyles}
      <main>
        <UserHeader routes={userRoute} />
        {children}
        <Footer />
      </main>
    </ProtectRoute>
  )
}
