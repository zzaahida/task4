import React, { useState, Component } from 'react';
import './tooltip.css';

class Tooltip extends Component {
    state = {
      isVisible: false,
      position: null,
    };
  
    showTooltip = (position) => () => {
      this.setState({ isVisible: true, position });
    };
  
    hideTooltip = () => {
      this.setState({ isVisible: false });
    };
  
    render() {
      const { isVisible, position } = this.state;
  
      const tooltipStyle = isVisible ? { display: 'block' } : { display: 'none' };
      const positionClass = `tooltip-${position}`;
  
      return (
        <div className="tooltip-container">
          {this.props.children({
            showTooltip: this.showTooltip,
            hideTooltip: this.hideTooltip,
          })}
          <div className={`tooltip-box ${positionClass}`} style={tooltipStyle}>
            {this.props.text}
          </div>
        </div>
      );
    }
};
export default Tooltip;
