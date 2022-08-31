import { ThemeMode } from '@hooks';
import { IoIosSunny } from '@react-icons/all-files/io/IoIosSunny';
import { IoMdMoon } from '@react-icons/all-files/io/IoMdMoon';
import React from 'react';
import styled from 'styled-components';
import { minDeviceMedia } from '@styles/theme';

type ThemeToggleProps = {
  themeMode: ThemeMode;
  themeToggle: () => void;
};

const StyledSun = styled(IoIosSunny)`
  color: #ffc400;
  cursor: pointer;
  margin-top: calc((2.375rem - 2rem) / 2);
`;

const StyledMoon = styled(IoMdMoon)`
  color: rgb(148, 144, 141);
  cursor: pointer;
  margin-top: calc((2.375rem - 2rem) / 2);
`;

const TooltipWrap = styled.span<{ content: string }>`
  position: relative;
  --icon-size: 2.4rem;
  ${minDeviceMedia.tablet} {
    --icon-size: 2rem;
  }
  ${StyledSun}, ${StyledMoon} {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  :hover::after {
    --font-size: 0.8rem;
    --line-height: 1.2;
    display: none;
    content: '${(props) => props.content}';
    position: absolute;
    font-size: var(--font-size);
    line-height: var(--line-height);
    width: max-content;
    border-radius: 0.5rem/0.75rem;
    background-color: ${({ theme }) => theme.selection.backgroundColor};
    color: ${({ theme }) => theme.selection.color};
    padding: 0.3rem;
  }
  ${minDeviceMedia.tablet} {
    :hover::after {
      display: inline;
      top: calc(var(--icon-size) / 2 - (var(--line-height) * var(--font-size)) / 2);
      right: calc(var(--icon-size) + 0.5rem);
    }
  }
  ${minDeviceMedia.laptop} {
    :hover::after {
      top: calc(var(--icon-size) + 0.75rem);
      left: -3ch;
    }
  }
`;

const ThemeToggle = ({ themeMode, themeToggle }: ThemeToggleProps): React.ReactElement => {
  return themeMode === ThemeMode.dark ? (
    <TooltipWrap content={'на светлую'}>
      <StyledSun onClick={themeToggle} />
    </TooltipWrap>
  ) : (
    <TooltipWrap content={'на тёмную'}>
      <StyledMoon onClick={themeToggle} />
    </TooltipWrap>
  );
};

export default ThemeToggle;
