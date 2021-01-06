function Block({ children, flex, classname }) {
  return (
    <div
      style={flex ? { display: 'flex' } : { display: 'block' }}
      className={classname}
    >
      {children}
    </div>
  );
}

export default Block;
