import { css } from '@emotion/react'
import UserLayout from '@/components/layouts/userLayout'
import BookItems from '@/components/base/bookItems'
import BookStoreDetail from '@/components/bookStores/bookStoreDetail'
import BookStoreList from '@/components/bookStores/bookStoreList'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  console.log(router)
  return (
    <UserLayout>
      {router.query.mode == 'detail' ? <BookStoreDetail /> : <BookStoreList />}
    </UserLayout>
  )
}
export default Index
const styles = {
  libraries: css`
    padding: 60px;
    .subTitle {
      font-size: 25px;
    }
    .subText {
      font-size: 20px;
      color: var(--textColor-black);
      font-weight: lighter;
      margin-bottom: 45px;
    }
  `,
  listContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
}
