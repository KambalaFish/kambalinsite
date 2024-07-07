import React from 'react';

interface TabContentProps {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

type TabWithSetIndex = ((props: TabContentProps) => React.ReactElement) & {
  __type__: 'withSetIndex';
};

type TabWithoutSetIndex = (() => React.ReactElement) & { __type__: 'withoutSetIndex' };

const makeTabWithSetIndex = (
  functionComponent: (props: TabContentProps) => React.ReactElement
): TabWithSetIndex => {
  return Object.assign(functionComponent, { __type__: 'withSetIndex' }) as TabWithSetIndex;
};

const makeTabWithoutSetIndex = (
  functionComponent: () => React.ReactElement
): TabWithoutSetIndex => {
  return Object.assign(functionComponent, { __type__: 'withoutSetIndex' }) as TabWithoutSetIndex;
};

const isTabWithSetIndex = (
  tabContent: TabWithSetIndex | TabWithoutSetIndex
): tabContent is TabWithSetIndex => {
  return tabContent.__type__ === 'withSetIndex';
};

export type { TabContentProps, TabWithSetIndex, TabWithoutSetIndex };
export { makeTabWithSetIndex, makeTabWithoutSetIndex, isTabWithSetIndex };
