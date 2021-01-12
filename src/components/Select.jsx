function Option({ value, text, _default }) {
  return _default ? (
    <option value={value} defaultValue>
      {text}
    </option>
  ) : (
    <option value={value}>{text}</option>
  );
}

function Select({ items, name, id }) {
  return (
    <select name={name} id={id}>
      {items.map((item) => (
        <Option
          text={`${item.text}개씩 보기`}
          _default={items.default}
          key={item.id}
        />
      ))}
    </select>
  );
}

export default Select;
