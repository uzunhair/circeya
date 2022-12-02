/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";

const StyledIcon = styled.svg.attrs({ xmlns: "http://www.w3.org/2000/svg" })`
  display: inline-block;
  position: relative;
  width: ${({ size, width }) => {
    if (size) {
      return typeof size === "string" ? size : size?.width ?? "1.5rem";
    }

    return width ?? "1em";
  }};
  height: ${({ size, height }) => {
    if (size) {
      return typeof size === "string" ? size : size?.height ?? "1.5rem";
    }

    return height ?? "1em";
  }};
  line-height: ${({ size, height }) => {
    if (size) {
      return typeof size === "string" ? size : size?.height ?? "1.5rem";
    }
    return height ?? "1em";
  }};
  vertical-align: middle;

  path {
    fill: ${({ color }) => color ?? "currentColor"};
    transition: fill 0.5s;
  }

  &:hover {
    path {
      fill: ${({ colorOnHover }) => colorOnHover ?? "currentColor"};
    }
  }
`;

export function PhoneIcon(...props) {
  return (
    <StyledIcon className="icon" viewBox=" 0 0 25 24" {...props}>
      <path d="M8.864 2.48l-.859.258A4.2 4.2 0 005.06 6.163c-.356 2.482.44 5.383 2.362 8.711 1.916 3.32 4.026 5.458 6.348 6.394a4.2 4.2 0 004.458-.846l.651-.617a2.4 2.4 0 00.296-3.148l-1.627-2.256a1.8 1.8 0 00-1.987-.667l-2.46.752-.064.012c-.271.04-.897-.547-1.677-1.898-.816-1.413-.986-2.24-.76-2.454l1.252-1.168a2.996 2.996 0 00.69-3.42l-.793-1.765A2.4 2.4 0 008.866 2.48h-.002zm1.788 1.805l.794 1.765a1.796 1.796 0 01-.413 2.052l-1.255 1.17c-.804.759-.538 2.059.54 3.928 1.017 1.76 1.944 2.628 2.939 2.477l.148-.031 2.506-.765a.6.6 0 01.662.222l1.628 2.256a1.2 1.2 0 01-.148 1.575l-.652.616a3 3 0 01-3.183.604c-2.038-.82-3.964-2.773-5.758-5.88-1.798-3.114-2.525-5.762-2.213-7.94a3 3 0 012.105-2.447l.86-.26a1.2 1.2 0 011.44.658z" />
    </StyledIcon>
  );
}
