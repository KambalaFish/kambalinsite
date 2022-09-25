import React from 'react';
import { PaginationHookProps, usePagination } from '../hooks/usePagination';
import { Container, Grid } from './index';
import { breakpoint } from '../hooks/usePagination';
import styled from 'styled-components';

interface PaginationProps extends PaginationHookProps {
  onPageChange: (page: number) => void;
}

const Breakpoint = styled.span`
  position: absolute;
  top: calc(var(--pill-width) / 2 - 1.2rem / 2 - 0.15rem);
`;

interface IndexPillProps {
  current?: boolean;
}

const IndexPill = styled(Container)<IndexPillProps>`
  position: relative;
  justify-content: center;
  text-align: center;
  --pill-width: 2.5rem;
  width: var(--pill-width);
  height: var(--pill-width);
  font-weight: 600;
  cursor: pointer;
  border-radius: 50%;
  color: ${({ current, theme }) => current && theme.pagination.indexPill.currentColor};
  background-color: ${({ current, theme }) =>
    current
      ? theme.pagination.indexPill.backgroundColorCurrent
      : theme.pagination.indexPill.backgroundColor};
  :hover {
    background-color: ${({ theme }) => theme.pagination.indexPill.backgroundColorCurrent};
  }
`;
IndexPill.defaultProps = {
  current: false,
};

const Arrow = styled.div`
  position: absolute;
  --arrow-width: 1.25rem;
  width: var(--arrow-width);
  height: var(--arrow-width);
  border-top-right-radius: 45%;
  --border-width: 0.4rem;
  border-right: var(--border-width) solid ${({ theme }) => theme.pagination.arrow.borderColor};
  border-top: var(--border-width) solid ${({ theme }) => theme.pagination.arrow.borderColor};
`;

const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
  right: calc(var(--switch-pill-width) / 2 - var(--arrow-width) / 2 + 0.2rem);
`;
const LeftArrow = styled(Arrow)`
  transform: rotate(225deg);
  left: calc(var(--switch-pill-width) / 2 - var(--arrow-width) / 2 + 0.2rem);
`;

interface SwitchPillProps extends IndexPillProps {
  isDisabled?: boolean;
}

const SwitchPill = styled(IndexPill)<SwitchPillProps>`
  --switch-pill-width: 4rem;
  width: var(--switch-pill-width);
  height: 2.5rem;
  border-radius: 25%/45%;
  pointer-events: ${({ isDisabled }) => isDisabled && `none`};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled
      ? theme.pagination.extremeIndexPill.backgroundColorDisabled
      : theme.pagination.extremeIndexPill.backgroundColor};
  ${Arrow} {
    border-right: ${({ isDisabled, theme }) =>
      isDisabled &&
      `var(--border-width) solid ${theme.pagination.extremeIndexPill.arrowBorderColorDisabled}`};
    border-top: ${({ isDisabled, theme }) =>
      isDisabled &&
      `var(--border-width) solid ${theme.pagination.extremeIndexPill.arrowBorderColorDisabled}`};
  }
`;

const Pagination = ({ onPageChange, ...restProps }: PaginationProps): React.ReactElement | null => {
  const paginationArray = usePagination(restProps);
  if (paginationArray.length < 2) return null;
  const { currentPage, pagesTotal } = restProps;

  const switchNext = () => onPageChange(currentPage + 1);
  const switchPrev = () => onPageChange(currentPage - 1);

  return (
    <Grid gridTemplateColumns={'4rem 1fr 4rem'} gridColumnGap={'1rem'}>
      <SwitchPill isDisabled={currentPage === 1} onClick={switchPrev}>
        <LeftArrow />
      </SwitchPill>
      <Grid
        as={'ul'}
        // width={'20rem'}
        gridColumnGap={`0.25rem`}
        justifyContent={'center'}
        alignContent={'center'}
        css={`
          display: grid;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
        `}
      >
        {paginationArray.map((el, index) => {
          if (el === breakpoint) {
            return (
              <IndexPill key={el + index.toString()} as={'li'}>
                <Breakpoint>{breakpoint}</Breakpoint>
              </IndexPill>
            );
          } else {
            return (
              <IndexPill
                as={'li'}
                key={el}
                current={el === currentPage}
                onClick={() => onPageChange(el as number)}
              >
                {el}
              </IndexPill>
            );
          }
        })}
      </Grid>
      <SwitchPill isDisabled={currentPage === pagesTotal} onClick={switchNext}>
        <RightArrow />
      </SwitchPill>
    </Grid>
  );
};

export { Pagination };
