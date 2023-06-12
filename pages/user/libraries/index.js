import UserLayout from '@/components/layouts/userLayout'
import { useRouter } from 'next/router'
import LibraryDetail from '@/components/libraries/libraryDetail'
import LibraryList from '@/components/libraries/libraryList'

const Index = () => {
  const router = useRouter()
  console.log(router)
  return (
    <UserLayout>
      {router.query.mode == 'detail' ? <LibraryDetail /> : <LibraryList />}
    </UserLayout>
  )
}
export default Index
