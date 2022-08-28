import { ThemeMode } from '@hooks';
import { IoIosSunny } from '@react-icons/all-files/io/IoIosSunny';
import { IoMdMoon } from '@react-icons/all-files/io/IoMdMoon';
import React from 'react';
import styled from 'styled-components';
import { minDeviceMedia } from '@styles/theme';

type ThemeTogglerProps = {
  themeMode: ThemeMode;
  themeToggler: () => void;
};

const StyledSun = styled(IoIosSunny)`
  color: #ffc400;
  cursor: pointer;
  margin-top: calc((2.375rem - 2rem) / 2);
`;

const TooltipWrap = styled.span<{ content: string }>`
  position: relative;
  :hover::after {
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
  color: #94908d;
  cursor: pointer;
  margin-top: calc((2.375rem - 2rem) / 2);
`;

const ThemeToggler = ({ themeMode, themeToggler }: ThemeTogglerProps): React.ReactElement => {
  return themeMode === ThemeMode.dark ? (
    <TooltipWrap content={'на светлую'}>
      <StyledSun size={'2em'} onClick={themeToggler} />
    </TooltipWrap>
  ) : (
    <TooltipWrap content={'на тёмную'}>
      <StyledMoon size={'2em'} onClick={themeToggler} />
    </TooltipWrap>
  );
};

export default ThemeToggler;
