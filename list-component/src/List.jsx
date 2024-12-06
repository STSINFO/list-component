import PropTypes from "prop-types";

function List(props) {
  const listItems = props.items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      {listItems.length > 0 && (
        <>
          <h1 className="List-catogry">{props.category.toUpperCase()}</h1>
          <ul className="List-items">{listItems}</ul>
        </>
      )}
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
