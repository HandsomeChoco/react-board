function Button({ text, width, bgColor, textColor, classname, rest }) {
  return (
    <button
      style={{ width: width, backgroundColor: bgColor, color: textColor }}
      className={classname ? classname : null}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
