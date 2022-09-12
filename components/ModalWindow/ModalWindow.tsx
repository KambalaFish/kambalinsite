import React, { useEffect, useRef, useState } from 'react';
import { BackShadow, TRANSITION_TIME } from './BackShadow';
import { ContentArea, CA_ANIM_APPEARANCE_DELAY_TIME } from './ContentArea';
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
  children?: React.ReactElement;
  contentAreaWidth?: string | string[];
}

const ModalWindow = ({
  isVisible,
  setModalVisibility,
  children,
  contentAreaWidth = ['85%', '80%', '70%', '60%', '50%'],
}: ModalWindowProps): React.ReactElement => {
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const [pointerEvents, setPointerEvents] = useState<PointerEvents>(PointerEvents.none);

  const onClose = () => {
    setModalVisibility(false);
    setPointerEvents(PointerEvents.none);
  };

  const onOutOfContentAreaClick = (event: React.UIEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      if (
        contentAreaRef.current &&
        contentAreaRef.current.clientHeight > document.documentElement.clientHeight
      ) {
        /*in case when content of children prop in ContentArea overflows vertically
        the setTimeout allows to wait for completion of transition
        which means the scroll of ModalWindow will disappear,
        this helps to avoid emergence of two scrolls for a short period of time*/
        setTimeout(() => {
          document.documentElement.style.overflowY = 'auto';
        }, TRANSITION_TIME);
      } else {
        /*when there is no vertical overflow in ContentArea
          we set overflowY immediately without delay*/
        document.documentElement.style.overflowY = 'auto';
      }
    }
  }, [isVisible]);

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
      <ContentArea
        id={'contentArea'}
        ref={contentAreaRef}
        isVisible={isVisible}
        maxWidth={contentAreaWidth}
      >
        <CloseButton onClick={onClose} />
        {children}
      </ContentArea>
    </BackShadow>
  );
};

export { ModalWindow };
