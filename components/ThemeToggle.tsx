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

const TooltipWrap = styled.span<{ content: string }>`
  position: relative;
  :hover::after {
    display: none;
    content: '${(props) => props.content}';
    position: absolute;
    font-size: 0.8rem;
    line-height: 1.2;
    width: max-content;
    border-radius: 0.5rem/0.75rem;
    background-color: ${({ theme }) => theme.selection.backgroundColor};
    color: ${({ theme }) => theme.selection.color};
    padding: 0.3rem;
  }
  ${minDeviceMedia.mobile} {
    :hover::after {
      display: inline;
      top: calc(2rem / 2 - (1.2 * 0.8rem + 0.3rem) / 2);
      right: 3rem;
    }
  }
  ${minDeviceMedia.laptop} {
    :hover::after {
      top: 3rem;
      right: -80%;
    }
  }
`;

const StyledMoon = styled(IoMdMoon)`
  color: rgb(148, 144, 141);
  cursor: pointer;
  margin-top: calc((2.375rem - 2rem) / 2);
`;

const ThemeToggle = ({ themeMode, themeToggle }: ThemeToggleProps): React.ReactElement => {
  return themeMode === ThemeMode.dark ? (
    <TooltipWrap content={'на светлую'}>
      <StyledSun size={'2em'} onClick={themeToggle} />
    </TooltipWrap>
  ) : (
    <TooltipWrap content={'на тёмную'}>
      <StyledMoon size={'2em'} onClick={themeToggle} />
    </TooltipWrap>
  );
};

export default ThemeToggle;
