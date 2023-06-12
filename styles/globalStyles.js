import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      * {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
      }
      html {
        --primaryColor: #2e686a;
        --secondaryColor: #eee8a9;
        --textColor-black: #324b4a;
        --textColor-white: #fff;
      }
    `}
  />
)
