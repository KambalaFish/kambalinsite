import React, { useEffect, useRef, useState } from 'react';
import { BackShadow, TRANSITION_TIME } from './BackShadow';
import { ContentArea, CA_ANIM_APPEARANCE_DELAY_TIME, CA_CLOSING_TIME } from './ContentArea';
import { CloseButton } from './CloseButton';

export interface Visibility {
  isVisible: boolean;
}

interface ModalVisibilityToggle {
  setModalVisibility: (v: boolean) => void;
}

export enum PointerEvents {
  none = 'none',
  auto = 'auto',
}

interface ModalWindowProps extends Visibility, ModalVisibilityToggle {
  children: React.ReactNode;
  contentAreaWidth?: string | string[];
  scrollContainerSelector?: string;
  onCloseCb?: () => void;
}

const ModalWindow = ({
  isVisible,
  setModalVisibility,
  children,
  contentAreaWidth = ['85%', '80%', '70%', '60%', '50%'],
  scrollContainerSelector = 'html',
  onCloseCb,
}: ModalWindowProps): React.ReactElement => {
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const [pointerEvents, setPointerEvents] = useState<PointerEvents>(PointerEvents.none);

  const onClose = () => {
    setModalVisibility(false);
    setPointerEvents(PointerEvents.none);
    if (onCloseCb) {
      setTimeout(() => {
        onCloseCb();
      }, CA_CLOSING_TIME);
    }
  };

  const onOutOfContentAreaClick = (event: React.UIEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const scrollableContainer = document.querySelector<HTMLDivElement>(scrollContainerSelector);
    if (scrollableContainer) {
      if (isVisible) {
        scrollableContainer.style.overflowY = 'hidden';
      } else {
        if (
          contentAreaRef.current &&
          contentAreaRef.current.scrollHeight > scrollableContainer.clientHeight
        ) {
          /*in case when content of children prop in ContentArea overflows vertically
              the setTimeout allows to wait for completion of transition
              which means the scroll of ModalWindow will disappear,
              this helps to avoid emergence of two scrolls for a short period of time*/
          setTimeout(() => {
            scrollableContainer.style.overflowY = 'auto';
          }, TRANSITION_TIME);
        } else {
          /*when there is no vertical overflow in ContentArea
                we set overflowY immediately without delay*/
          scrollableContainer.style.overflowY = 'auto';
        }
      }
    }
  }, [isVisible, scrollContainerSelector]);

  /*This useEffect helps to prevent closing modal window by click
  on outside ContentArea during appearance animation of ContentArea*/
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setPointerEvents(PointerEvents.auto);
      }, TRANSITION_TIME + CA_ANIM_APPEARANCE_DELAY_TIME);
    }
  }, [isVisible]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <BackShadow
      pointerEvents={pointerEvents}
      isVisible={isVisible}
      onClick={onOutOfContentAreaClick}
    >
      <ContentArea ref={contentAreaRef} isVisible={isVisible} width={contentAreaWidth}>
        <CloseButton onClick={onClose} />
        {children}
      </ContentArea>
    </BackShadow>
  );
};

export { ModalWindow };
