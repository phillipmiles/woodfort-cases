import s from './InputTextArea.module.css';

interface Props {
  className: string;
}

const InputTextArea = ({ className, ...props }: Props) => {
  return <textarea className={`${s.input} ${className}`} {...props} />;
};
export default InputTextArea;
