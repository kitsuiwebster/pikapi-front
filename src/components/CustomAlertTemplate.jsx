import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/components/CustomAlertTemplate.scss';

const CustomAlertTemplate = ({ style, options, message, close }) => {
  return (
    <div className="custom-alert" style={style}>
      <p className='custom-alert-text'>{message}</p>
      <button className='custom-alert-button' onClick={close}>×</button>
    </div>
  );
};

CustomAlertTemplate.propTypes = {
    style: PropTypes.object,
    options: PropTypes.object,
    message: PropTypes.node.isRequired,
    close: PropTypes.func.isRequired,
};

export default CustomAlertTemplate;
