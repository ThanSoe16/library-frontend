import { css } from '@emotion/react'
import UserLayout from '@/components/layouts/userLayout'
import LibraryItems from '@/components/base/libraryItems'
import BookItems from '@/components/base/bookItems'

const Index = () => {
  return (
    <UserLayout>
      <div css={styles.libraries}>
        <h3
          className="subTitle text-center"
          css={{
            color: 'var(--textColor-black)',
          }}
        >
          Our Library Lists
        </h3>
        <h4 className="subText text-center">
          Today a reader, tomorrow a leader.
        </h4>
        <div className="justify-content-start" css={styles.listContainer}>
          <LibraryItems
            title={'A-Library'}
            description={
              'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
            }
          />
          <LibraryItems
            title={'A-Library'}
            description={
              'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
            }
          />
          <LibraryItems
            title={'A-Library'}
            description={
              'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
            }
          />
        </div>
      </div>
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
