// // src/components/Button.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import './Button.css'; // Import styles for the button

// const Button = ({
//     children,
//     onClick,
//     type = 'button',
//     variant = 'primary',
//     size = 'medium',
//     disabled = false,
//     isLoading = false,
//     ...props
// }) => {
//     return (
//         <button
//             type={type}
//             className={`btn btn-${variant} btn-${size}`}
//             onClick={onClick}
//             disabled={disabled || isLoading}
//             {...props}
//         >
//             {isLoading ? 'Loading...' : children}
//         </button>
//     );
// };

// // Define PropTypes for type checking
// Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func,
//     type: PropTypes.oneOf(['button', 'submit', 'reset']),
//     variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'warning']),
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     disabled: PropTypes.bool,
//     isLoading: PropTypes.bool,
// };

// // Define default props for the component
// Button.defaultProps = {
//     type: 'button',
//     variant: 'primary',
//     size: 'medium',
//     disabled: false,
//     isLoading: false,
// };

// export default Button;


// Button.js
import React from 'react';

const Button = ({ variant = 'primary', onClick, children, style }) => {
    const buttonStyles = {
        backgroundColor: variant === 'primary' ? '#000080' : '#6c757d',
        color: '#fff',
        padding: '10px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: "'Exo 2', sans-serif", // Apply Exo font here
        ...style, // Merge with any additional styles passed in
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyles}
        >
            {children}
        </button>
    );
};

export default Button;
