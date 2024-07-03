import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() !== "") {
          onSearch(values.query);
          actions.resetForm();
        } else {
          toast.error("The search field is empty. Please try again!", {
            position: "top-right",
          });
        }
        return;
      }}
    >
      <div className={css.searchBar}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default SearchBar