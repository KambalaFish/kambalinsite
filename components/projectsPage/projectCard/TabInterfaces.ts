import React from 'react';

interface SetImageIndexProp {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

type TabWithSetIndex = ((props: SetImageIndexProp) => React.ReactElement) & {
  __type__: 'withSetIndex';
};

type TabWithoutSetIndex = (() => React.ReactElement) & { __type__: 'withoutSetIndex' };

interface SetTabIndexProp {
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

type TabWithoutImageIndexAndWithTabIndex = ((props: SetTabIndexProp) => React.ReactElement) & {
  __type__: 'withoutSetImageIndexAndWithTabIndex';
};

const makeTabWithSetIndex = (
  functionComponent: (props: SetImageIndexProp) => React.ReactElement
): TabWithSetIndex => {
  return Object.assign(functionComponent, { __type__: 'withSetIndex' }) as TabWithSetIndex;
};

const makeTabWithoutSetIndex = (
  functionComponent: () => React.ReactElement
): TabWithoutSetIndex => {
  return Object.assign(functionComponent, { __type__: 'withoutSetIndex' }) as TabWithoutSetIndex;
};

const makeTabWithoutImageIndexAndWithTabIndex = (
  functionComponent: (props: SetTabIndexProp) => React.ReactElement
): TabWithoutImageIndexAndWithTabIndex => {
  return Object.assign(functionComponent, {
    __type__: 'withoutSetImageIndexAndWithTabIndex',
  }) as TabWithoutImageIndexAndWithTabIndex;
};

const isTabWithSetIndex = (
  tabContent: TabWithSetIndex | TabWithoutSetIndex | TabWithoutImageIndexAndWithTabIndex
): tabContent is TabWithSetIndex => {
  return tabContent.__type__ === 'withSetIndex';
};

const isTabWithoutSetIndex = (
  tabContent: TabWithSetIndex | TabWithoutSetIndex | TabWithoutImageIndexAndWithTabIndex
): tabContent is TabWithoutSetIndex => {
  return tabContent.__type__ === 'withoutSetIndex';
};

const isTabWithoutImageIndexAndWithTabIndex = (
  tabContent: TabWithSetIndex | TabWithoutSetIndex | TabWithoutImageIndexAndWithTabIndex
): tabContent is TabWithoutImageIndexAndWithTabIndex =>
  tabContent.__type__ === 'withoutSetImageIndexAndWithTabIndex';

export type {
  SetImageIndexProp,
  TabWithSetIndex,
  TabWithoutSetIndex,
  TabWithoutImageIndexAndWithTabIndex,
  SetTabIndexProp,
};
export {
  makeTabWithSetIndex,
  makeTabWithoutSetIndex,
  isTabWithSetIndex,
  isTabWithoutSetIndex,
  isTabWithoutImageIndexAndWithTabIndex,
  makeTabWithoutImageIndexAndWithTabIndex,
};
