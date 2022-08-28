import { useMemo } from 'react';

const range = (startPosition: number, endPosition: number): number[] => {
  const length = endPosition - startPosition + 1;

  return Array.from({ length }, (_, index) => index + startPosition);
};

const breakpoint = '...';

export interface PaginationHookProps {
  currentPage: number;
  pagesTotal: number;
  siblingCount: number;
}

const usePagination = ({
  currentPage,
  pagesTotal,
  siblingCount = 1,
}: PaginationHookProps): (string | number)[] => {
  /*тот редкий случай, когда эти комменты оправданы :)*/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return useMemo(() => {
    /*количество кнопочек для выбора страниц*/
    /*число соседних элементов + первая страница + последняя страница + текущая страница + два брейкпойнта(...)*/
    const totalPagePills = 2 * siblingCount + 5;

    /*случай 1: число страниц в наличии меньше числа кнопочек для выбора страниц*/
    if (totalPagePills >= pagesTotal) {
      return range(1, pagesTotal);
    }

    const leftExtremeSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightExtremeSiblingIndex = Math.min(currentPage + siblingCount, pagesTotal);

    const firstPageIndex = 1;
    const lastPageIndex = pagesTotal;

    /*Не указываем брейкпойнты, когда между крайним соседом (слева/справа) и началом/концом один индекс*/
    // const isLeftBreakPointVisible = firstPageIndex + 1 < leftExtremeSiblingIndex;
    // const isRightBreakPointVisible = rightExtremeSiblingIndex < lastPageIndex - 2;

    const isLeftBreakPointVisible = firstPageIndex + 1 < leftExtremeSiblingIndex;
    const isRightBreakPointVisible = rightExtremeSiblingIndex < lastPageIndex - 1;

    /*случай 2: слева нет брейкпойнта, справа есть брейкпойнт*/
    if (!isLeftBreakPointVisible && isRightBreakPointVisible) {
      return [...range(firstPageIndex, 3 + siblingCount * 2), breakpoint, lastPageIndex];
    }

    /*случай 3: слева есть брейкпойнт, справа нет брейкпойнта*/
    if (isLeftBreakPointVisible && !isRightBreakPointVisible) {
      return [
        firstPageIndex,
        breakpoint,
        ...range(lastPageIndex - siblingCount * 2 - 2, lastPageIndex),
      ];
    }

    /*случай 4: слева и справа есть брейкпойнты*/
    if (isLeftBreakPointVisible && isRightBreakPointVisible) {
      return [
        firstPageIndex,
        breakpoint,
        ...range(leftExtremeSiblingIndex, rightExtremeSiblingIndex),
        breakpoint,
        lastPageIndex,
      ];
    }
  }, [currentPage, siblingCount, pagesTotal]);
};

export { usePagination, breakpoint };
