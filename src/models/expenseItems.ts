export default interface expenseItems {
  description: string;
  amount: number;
  category: Categories;
  id: number;
}

type Categories = "Groceries" | "Utilities" | "Entertainment";
