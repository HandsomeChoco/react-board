function BoardTitle({ tag, text }) {
  switch (tag) {
    case 'h1':
      return <h1>{text}</h1>;
    case 'h2':
      return <h2>{text}</h2>;
    case 'h3':
      return <h3>{text}</h3>;
    case 'h4':
      return <h4>{text}</h4>;
    case 'h5':
      return <h5>{text}</h5>;
    case 'h6':
      return <h6>{text}</h6>;
    default:
      throw new Error('tag Parameter have to be a string h1 ~ h6');
  }
}

export default BoardTitle;
