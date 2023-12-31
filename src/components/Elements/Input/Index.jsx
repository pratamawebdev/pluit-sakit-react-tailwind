const Input = (props) => {
  const { type, className, placeholder } = props;
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default Input;
