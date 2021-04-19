export const ColorfulMessage = (props) => {
  // console.log("ColorfulMessage");
  const { color, children } = props;
  const style = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={style}>{children}</p>
    </>
  );
};
