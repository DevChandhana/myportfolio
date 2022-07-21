const Button = (props) => {
  console.log(props.fill);
  return (
    <button
      style={{
        backgroundColor: !props.fill && "#EF5B0C",
        borderWidth: props.fill && "2.4px",
        borderColor: props.fill && "#EF5B0C",
      }}
      className={"py-2 px-2 mx-2 rounded-md cursor-pointer "}
    >
      {props.value}
    </button>
  );
};
export default Button;
