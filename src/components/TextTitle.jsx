function TextTitle({ tag, text, classname }) {
  switch (tag) {
    case 'h1':
      return <h1 className={classname}>{text}</h1>;
    case 'h2':
      return <h2 className={classname}>{text}</h2>;
    case 'h3':
      return <h3 className={classname}>{text}</h3>;
    case 'h4':
      return <h4 className={classname}>{text}</h4>;
    case 'h5':
      return <h5 className={classname}>{text}</h5>;
    case 'h6':
      return <h6 className={classname}>{text}</h6>;
    default:
      throw new Error('tag Parameter have to be a string h1 ~ h6');
  }
}

export default TextTitle;
