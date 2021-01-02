function Block({ children, flex }) {
  return (
    <div style={flex ? { display: 'flex' } : { display: 'block' }}>
      {children}
    </div>
  );
}

export default Block;
