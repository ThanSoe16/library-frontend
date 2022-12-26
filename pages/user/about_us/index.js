import { css } from '@emotion/react'
import UserLayout from '@/components/layouts/userLayout'

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
          About Us
        </h3>
      </div>
    </UserLayout>
  )
}
export default Index
const styles = {
  libraries: css`
    padding: 80px 0px;
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
}
