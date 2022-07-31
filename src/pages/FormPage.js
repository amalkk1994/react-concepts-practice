import { useState } from "react";
import Styles from "./FormPage.module.css";

const FormPage = () => {
  const initialValues = { title: "", body: "", userId: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateFields(formValues));
    if (!!formErrors) {
      setIsSubmitted(true);
    }
  };

  const validateFields = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.body) {
      errors.body = "Body is required!";
    }
    if (!values.userId) {
      errors.userId = "user id is required!";
    }

    return errors;
  };

  return (
    <div className={Styles.formContainer}>
      <h2>Enter the details</h2>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <div className={Styles.formField}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formValues.title}
            onChange={handleOnChange}
          />
          <p>{formErrors.title}</p>
        </div>
        <div className={Styles.formField}>
          <label>body</label>
          <input
            type="text"
            name="body"
            placeholder="body"
            value={formValues.body}
            onChange={handleOnChange}
          />
          <p>{formErrors.body}</p>
        </div>
        <div className={Styles.formField}>
          <label>user id</label>
          <input
            type="text"
            name="userId"
            placeholder="user id"
            value={formValues.userId}
            onChange={handleOnChange}
          />
          <p>{formErrors.userId}</p>
        </div>
        <button className={Styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
