function TextTitle({ tag, text, classname, onClick, rest, children }) {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={classname} onClick={onClick} {...rest}>
          {text}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classname} onClick={onClick} {...rest}>
          {text}
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classname} onClick={onClick} {...rest}>
          {text}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={classname} onClick={onClick} {...rest}>
          {text}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={classname} onClick={onClick} {...rest}>
          {text}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={classname} onClick={onClick} {...rest}>
          {text}
        </h6>
      );
    default:
      throw new Error('tag Parameter have to be a string h1 ~ h6');
  }
}

export default TextTitle;
