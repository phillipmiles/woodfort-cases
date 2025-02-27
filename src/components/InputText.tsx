import s from './InputText.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = ({ className, ...props }: Props) => {
  return <input className={`${s.input} ${className}`} {...props} />;
};
export default InputText;
