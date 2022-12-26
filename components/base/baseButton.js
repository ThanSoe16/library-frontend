import { css } from '@emotion/react'
import { FaArrowRight } from 'react-icons/fa'

const BaseButton = ({
  label,
  primary = true,
  background = false,
  rightArrow = false,
  block = false,
  onClick,
}) => {
  return (
    <div
      css={styles.libraryButton({
        primary: primary,
        background: background,
        block: block,
      })}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={() => onClick()}
    >
      <div>{label}</div>
      {rightArrow && <FaArrowRight style={{ marginLeft: '10px' }} />}
    </div>
  )
}
export default BaseButton
const styles = {
  libraryButton: ({ primary, background, block }) => css`
    background-color: ${primary
      ? 'var(--primaryColor)'
      : 'var(--secondaryColor)'};
    font-size: 14px;
    transition: 0.4s ease-in-out;
    padding: 15px 30px;
    width: ${block ? '100%' : 'auto'};
    color: ${primary ? 'var(--textColor-white)' : 'var(--textColor-black)'};
    border-radius: 15px;
    text-decoration: none;
    justify-content: center;
    cursor: pointer;
    :hover {
      background-color: ${primary
        ? background
          ? 'var(--textColor-white)'
          : 'var(--secondaryColor)'
        : 'var(--textColor-white)'};
      color: var(--textColor-black);
    }
  `,
}
