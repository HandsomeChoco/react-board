function Button({ text, width, bgColor, textColor, classname, onClick, rest }) {
  return (
    <button
      style={{ width: width, backgroundColor: bgColor, color: textColor }}
      className={classname ? classname : null}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
