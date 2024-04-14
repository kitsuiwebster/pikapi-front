import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/components/CustomAlertTemplate.scss';

const CustomAlertTemplate = ({ style, options, message, close }) => {
  const alertClass = options.type === 'error' ? 'custom-alert-error' : 'custom-alert-success';

  return (
    <div className={`custom-alert ${alertClass}`} style={style}>
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
