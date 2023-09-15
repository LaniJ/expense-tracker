import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ExpenseItem from "../models/expenseItems";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().min(5, { message: "A category should be selected" }),
});

type FormData = z.infer<typeof schema>;

type Categories = "Groceries" | "Utilities" | "Entertainment";

// interface FormData {
//   description: string;
//   amount: number;
//   category: Categories;
// }

interface Props {
  updateList: (data: FieldValues) => void;
}

const Form = ({ updateList }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("submitted", data);
    updateList(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          id="category"
          {...register("category")}
          aria-label="Default select example"
        >
          <option defaultValue={""}></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
