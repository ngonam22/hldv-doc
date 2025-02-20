import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal
} from "@floating-ui/react";
import styles from './styles.module.scss';
import AutoLayout from './AutoLayout';

// Dynamically import all MD files from the tooltips directory
const tooltipContext = require.context('../../../tooltips', true, /\.md$/);




const Tooltip = ({ id, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "start"
      }),
      shift()
    ]
  });

  try {
    const tooltipPath = `./${id}.md`;
    const { default: TooltipContent, frontMatter: metadata} = tooltipContext(tooltipPath);

    // Event listeners to change the open state
    const hover = useHover(context, { move: true });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    // Role props for screen readers
    const role = useRole(context, { role: "tooltip" });

    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps } = useInteractions([
      hover,
      focus,
      dismiss,
      role
    ]);

    if (!TooltipContent) {
      return <span>{children}</span>
    }

    return (
      <>
        <span 
          className="tooltip-trigger" 
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          {children}

        </span>

        <FloatingPortal>
          {isOpen && (
            <div
              className={styles.tooltipHolder}
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              <div className={styles.tooltipBg}></div>
              <div className={styles.tooltipContent}>
                <AutoLayout filePath={tooltipPath} metadata={metadata}>
                  <TooltipContent />
                </AutoLayout>
              </div>
            </div>
          )}
        </FloatingPortal>
      </>
    );
  } catch (error) {
    console.error(`Tooltip content for "${id}" not found!`);
    return children;
  }
};

export default Tooltip;