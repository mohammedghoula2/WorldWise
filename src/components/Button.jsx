/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Button.module.css';

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles[type]} ${styles.btn}`}>
      {children}
    </button>
  );
}

export default Button;
