import s from './InputTextArea.module.css';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

const InputTextArea = ({ className, ...props }: Props) => {
  return <textarea className={`${s.input} ${className}`} {...props} />;
};
export default InputTextArea;
