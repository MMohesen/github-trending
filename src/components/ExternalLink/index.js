import React from "react";

/**
 * External Link Component
 * @param to
 * @param target
 * @param children
 * @param routeProps
 * @return {JSX.Element}
 */
const ExternalLink = ({ to, target = "self", children, ...routeProps }) => {
  /***
   * Handle on open external link
   * @param e
   * @return {*}
   */
  const handleOnOpenLink = (e) => {
    e.preventDefault();
    if (target === "self") {
      return (window.location = to);
    }
    window.open(to, target);
  };

  return (
    <span className={"external-url"} {...routeProps} onClick={handleOnOpenLink}>
      {children}
    </span>
  );
};

// component
export default ExternalLink;
