import { css } from '@emotion/react'
import { FaArrowRight } from 'react-icons/fa'

const BaseButton = ({
  label,
  primary = true,
  background = false,
  rightArrow = false,
  block = false,
  onClick,
  enableIcon = false,
  icon,
  height = 50,
  radius = 15,
}) => {
  return (
    <div
      css={styles.libraryButton({
        primary: primary,
        background: background,
        block: block,
        height: height,
        radius: radius,
      })}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={() => onClick()}
    >
      {enableIcon && icon()}
      {enableIcon && <div style={{ marginRight: '5px' }} />}
      <div>{label}</div>
      {rightArrow && <FaArrowRight style={{ marginLeft: '10px' }} />}
    </div>
  )
}
export default BaseButton
const styles = {
  libraryButton: ({ primary, background, block, height, radius }) => css`
    background-color: ${primary
      ? 'var(--primaryColor)'
      : 'var(--secondaryColor)'};
    font-size: 14px;
    transition: 0.4s ease-in-out;
    height: ${height}px;
    padding: 0px 30px;
    width: ${block ? '100%' : 'auto'};
    color: ${primary ? 'var(--textColor-white)' : 'var(--textColor-black)'};
    border-radius: ${radius}px;
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
