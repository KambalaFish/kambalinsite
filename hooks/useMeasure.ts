import { useCallback, useState } from 'react';

type UseMeasureRect = Pick<DOMRect, 'width' | 'height'>;

const defaultMeasureState: UseMeasureRect = {
  width: 0,
  height: 0,
};

type UseMeasureRef<E extends Element = Element> = (element: E) => void;
type UseMeasureResult<E extends Element = Element> = [UseMeasureRef<E>, UseMeasureRect];

const useMeasure = <E extends Element = Element>(): UseMeasureResult<E> => {
  const [rect, setMeasuredRect] = useState<UseMeasureRect>(defaultMeasureState);
  const measuredRef = useCallback((node: E) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setMeasuredRect({
        width,
        height,
      });
    }
  }, []);

  return [measuredRef, rect];
};

export { useMeasure };
