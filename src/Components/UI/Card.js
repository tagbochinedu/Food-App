const Card = (props) => {
  return (
    <div
      className={`${"shadow-black shadow-lg rounded-lg"} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
};
export default Card;
