import React, { component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
class bodySectionWithMargin extends component {
    render () {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        );
    }
};
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };
  
  export default BodySectionWithMarginBottom;