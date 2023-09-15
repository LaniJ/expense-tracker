import ExpenseItem from "../models/expenseItems";

interface Props {
  items: ExpenseItem[];
}

const List = ({ items }: Props) => {
  return (
    <div>
      <p>List items</p>
      {items?.length && (
        <ul>
          {items.map((item) => (
            <li>
              <p>{item.id}</p>
              <p>{item.description}</p>
              <p>{item.amount}</p>
              <p>{item.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
