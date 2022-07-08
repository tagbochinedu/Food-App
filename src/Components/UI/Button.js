const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick}
      className={`${"shadow-black shadow-md rounded-lg bg-bg"} ${
        props.className
      }`}
    >
      {props.children}
    </button>
  );
};
export default Button;
