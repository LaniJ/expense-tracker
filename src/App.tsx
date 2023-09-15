import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import ExpenseItem from "./models/expenseItems";

const App = () => {
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);

  const handleUpdate = (data: ExpenseItem) => {
    // console.log("data in app", data);
    if (expenseItems.length === 0) {
      setExpenseItems([...expenseItems, { ...data, id: 1 }]);
    } else {
      const lastItemId = expenseItems[expenseItems.length - 1].id;
      setExpenseItems([...expenseItems, { ...data, id: lastItemId + 1 }]);
    }
  };
  return (
    <div>
      <Form updateList={handleUpdate} />
      <br /> <br />
      <List items={expenseItems} />
    </div>
  );
};

export default App;
