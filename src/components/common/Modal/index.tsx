import { MouseEventHandler, ReactNode, useRef } from "react";

import { CSSTransition } from "react-transition-group";

import { FlexRow } from "@/components/common/Layout";
import { cn } from "@/utils";

interface IModalProps {
  title: string;
  Icon?: string;
  subtitle?: string;
  show: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
  className?: string;
  headerContent?: string;
  zIndex?: number;
  hideCloseButton?: boolean;
}

export default function Modal({
  title,
  Icon,
  subtitle,
  show,
  onClose,
  children,
  className,
  headerContent,
  zIndex = 1111,
  hideCloseButton,
}: IModalProps) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={150}
      unmountOnExit
      classNames={{
        enter: "opacity-0 scale-95",
        enterActive:
          "opacity-100 scale-100 transition-all ease-in duration-150",
        enterDone: "opacity-100 scale-100",
        exit: "opacity-50 scale-75 transition-all ease-out duration-150",
        exitActive: "opacity-0 scale-50",
      }}
    >
      <div
        tabIndex={-1}
        className={cn(
          "h-modal fixed inset-0 flex h-screen w-screen justify-center overflow-y-auto overflow-x-hidden bg-grey-700/50 p-4 md:inset-0 md:h-full",
          show && "",
          `z-[${zIndex}]`
        )}
        style={{ zIndex }}
      >
        <div ref={nodeRef} className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative flex h-full w-full max-w-2xl flex-col items-center justify-center md:h-auto">
              <div
                className={cn(
                  "relative max-h-[calc(100vh-4rem)] w-[32rem] overflow-hidden rounded-lg bg-white shadow",
                  className
                )}
              >
                <div
                  className={cn(
                    "flex items-start justify-between rounded-t-[20px] px-6",
                    !subtitle && title && "pt-5",
                    subtitle && "py-5"
                  )}
                >
                  {headerContent || (
                    <div className="space-y-1">
                      <FlexRow gap={2} className="items-center">
                        {Icon && (
                          <i className="material-icons text-red-500">{Icon}</i>
                        )}
                        <h5 className="font-bold">{title}</h5>
                      </FlexRow>
                      {subtitle && <p className="text-sm">{subtitle}</p>}
                    </div>
                  )}

                  {!hideCloseButton && (
                    <button
                      type="button"
                      className="ml-auto inline-flex items-center rounded-lg bg-transparent py-1 text-sm text-grey-800 hover:bg-grey-200 hover:text-grey-900"
                      onClick={onClose}
                    >
                      <i className="material-icons text-grey-600">close</i>
                      <span className="sr-only">Close modal</span>
                    </button>
                  )}
                </div>
                <div className="flex">
                  <div className="scrollbar max-h-[calc(100vh-10rem)] grow overflow-y-auto px-6 pb-5">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
