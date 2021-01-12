function Block({ children, flex, classname }) {
  return (
    <div style={flex ? { display: 'flex' } : null} className={classname}>
      {children}
    </div>
  );
}

export default Block;
