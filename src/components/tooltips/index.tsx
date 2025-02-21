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
  // State to manage whether the tooltip is open
  const [isOpen, setIsOpen] = useState(false);
  // State to track if the mouse is over the trigger (reference element)
  const [isReferenceHovered, setIsReferenceHovered] = useState(false);
  // State to track if the mouse is over the tooltip (floating element)
  const [isFloatingHovered, setIsFloatingHovered] = useState(false);
  // Ref to store the close timeout
  const closeTimeoutRef = useRef(null);

  // Floating UI setup for positioning the tooltip
  const { refs, floatingStyles } = useFloating({
    placement: "top",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "start"
      }),
      shift()
    ]
  });

  // Effect to manage the open state based on hover states
  useEffect(() => {
    if (isReferenceHovered || isFloatingHovered) {
      // If either the trigger or tooltip is hovered, clear any close timeout and keep the tooltip open
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsOpen(true);
    } else {
      // If neither is hovered, set a timeout to close the tooltip after 200ms
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        closeTimeoutRef.current = null;
      }, 200);
    }
  }, [isReferenceHovered, isFloatingHovered]);

  try {
    const tooltipPath = `./${id}.md`;
    const { default: TooltipContent, frontMatter: metadata} = tooltipContext(tooltipPath);

    

    if (!TooltipContent) {
      return <span>{children}</span>
    }

    return (
      <>
        <span 
          className="tooltip-trigger" 
          ref={refs.setReference}
          onMouseEnter={() => setIsReferenceHovered(true)}
          onMouseLeave={() => setIsReferenceHovered(false)}
        >
          {children}

        </span>

        <FloatingPortal>
          {isOpen && (
            <div
              className={styles.tooltipHolder}
              ref={refs.setFloating}
              style={floatingStyles}
              onMouseEnter={() => {
                // When entering the tooltip, set it as hovered and clear any close timeout
                setIsFloatingHovered(true);
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
              }}
              onMouseLeave={() => {
                // When leaving the tooltip, set it as not hovered
                setIsFloatingHovered(false);
                // If the trigger is not hovered, close the tooltip immediately
                if (!isReferenceHovered) {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                  }
                  setIsOpen(false);
                }
              }}
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