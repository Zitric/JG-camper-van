/** @jsx jsx */
import { jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const FadeIn = ({ duration = 500, delay = 0, children, ...delegated }) => {
  const Wrapper = styled.div`
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${fadeIn};
      animation-fill-mode: backwards;
    }
  `;

  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};
export default FadeIn;
