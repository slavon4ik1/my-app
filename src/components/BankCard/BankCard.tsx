import { Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BankCardForm } from "../BankCardForm";
import { CommonBtn } from "../commonBtn";
import { ICard } from "../interfaces/card.interfaces";
import "./BankCard.scss";

export const monthRegex = /^(0?[1-9]|1[012])$/;
export const yearRegex = /^(0?[1-9]|1[012])$/;

const CardSchema = Yup.object().shape({
  number: Yup.string()
    .min(0, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  expiryMonth: Yup.string()
    .required("Required")
    .matches(monthRegex, "Only number"),
  expiryYear: Yup.string()
    .required("Required")
    .matches(yearRegex, "Only number"),
  ccv2: Yup.string().required("Required"),
});

interface Props {
    
}


export const BankCard = (props: Props) => {
  const isSuccess = (values: ICard) => {
    const hardcode = {
      number: "1234123412341234",
      expiryMonth: "11",
      expiryYear: "20",
      cvv2: "123",
    };

    if (
      values.number === hardcode.number &&
      values.expiryMonth === hardcode.expiryMonth &&
      values.expiryYear === hardcode.expiryYear &&
      values.cvv2 === hardcode.cvv2
    ) {
      alert("success");
    }
  };

  return (
    <div className="bankCard">
      <Formik
        validationSchema={CardSchema}
        initialValues={{
          number: "",
          expiryMonth: "",
          expiryYear: "",
          cvv2: "",
        }}
        onSubmit={async (values) => {
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="bankCard__form">
            <div className="bankCard__formWrapper">
              <BankCardForm values={values} errors={errors} touched={touched} />
            </div>
            <div className="bankCard__controls">
              <div className="bankCard__btnsBlock">
                <CommonBtn
                  onClick={() => isSuccess(values)}
                  color="fullfieldRed"
                  className="bankCard__btn"
                  type="submit"
                  value="Check"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <pre>
        Card number: "1234123412341234", <br/>
        expiryMonth: "11",<br/>
        expiryYear: "20",<br/>
        cvv2: "123"
      </pre>
    </div>
  );
};
