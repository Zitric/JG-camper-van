import React from 'react';
import { useTheme } from '@emotion/react';
import { css, Global } from '@emotion/core';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          background-color: ${theme.color.white};
          margin: 0;
          font-size: 18px;
          line-height: 1.4;
          > div {
            margin-top: 0;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.1;
          padding-left: 25px;

          + * {
            margin-top: 0.5rem;
            background-color: ${theme.color.white};
          }
        }

        strong,
        span.anticon.anticon-caret-right.ant-collapse-arrow {
          color: ${theme.color.alternative} !important;
        }

        li {
          margin-top: 0.25rem;
        }

        .grid {
          display: grid;
          grid-template-columns:
            [xl-start] 1fr 1.5rem [md-start]
            minmax(0, 800px)
            [md-end] 1.5rem 1fr [xl-end];
        }

        .grid * {
          grid-column: md;
        }

        .grid-xl {
          grid-column: xl;
        }

        .section {
          padding: 4rem 0;
        }

        .full-height {
          height: calc(100vh - 3.25rem);
        }

        .height-30vh {
          height: 30vh;
        }

        .height-40vh {
          height: 40vh;
        }

        .height-50vh {
          height: 50vh;
        }

        .height-80vh {
          height: 80vh;
        }

        h3.margin-bottom-3rem {
          margin-bottom: 3rem;
        }
      `}
    />
  );
};

export default GlobalStyles;
