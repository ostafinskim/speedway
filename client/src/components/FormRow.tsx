import { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/all';
import { capitalizeMe } from '../utilities/capitalizeMe';

interface FormRowTypes {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow = ({ name, type, onChange }: FormRowTypes) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  if (name === 'password') {
    return (
      <div className='form-row'>
        <label htmlFor={name}>{capitalizeMe(name)}:</label>
        <input
          type={showPassword ? 'text' : type}
          name={name}
          id={name}
          placeholder={`eg. p4s$w0rD!`}
          onChange={onChange}
        />
        <span className='togglePassword' onClick={togglePassword}>
          {showPassword ? <ImEye /> : <ImEyeBlocked />}
        </span>
      </div>
    );
  }
  return (
    <div className='form-row'>
      <label htmlFor={name}>{capitalizeMe(name)}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={capitalizeMe(name)}
        onChange={onChange}
      />
    </div>
  );
};
export default FormRow;
