import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import style from "./style.module.css";

interface Props extends InjectedFormProps {}

const Login: React.FC<Props> = ({ handleSubmit, ...rest }) => {
  const submit = (values: any) => console.log(JSON.stringify(values));

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <Field className={style.formItem} type="email" name="email" component={TextField} />
        <Field className={style.formItem} type="password" name="password" component={TextField} />
        <Button className={style.formItem} onSubmit={handleSubmit(submit)}>
          login
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "login" })(Login);
