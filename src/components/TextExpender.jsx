/* eslint-disable react/prop-types */
import { useState } from "react";

function TextExpender({
  collapsedNumberOfTheWords = 10,
  expendedButtonText = "Show more",
  collapsedButtonText = "Show less",
  buttonColor = "#1f09cd",
  className,
  expended,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expended);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumberOfTheWords).join() + "...";

  return (
    <div className={className}>
      <span className="mr-2">{displayText}</span>
      <button
        className=""
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        style={{ color: buttonColor }}
      >
        {isExpanded ? collapsedButtonText : expendedButtonText}
      </button>
    </div>
  );
}

export default TextExpender;
