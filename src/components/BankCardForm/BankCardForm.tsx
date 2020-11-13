import { FormikErrors, FormikTouched, FormikValues } from "formik";
import * as React from "react";
import { FormInput } from "../formInput";
import { ICard } from "../interfaces/card.interfaces";
import "./BankCardForm.scss";

interface Props {
  values?: FormikValues;
  errors?: FormikErrors<ICard>;
  touched?: FormikTouched<ICard>;
}

export const BankCardForm = ({ values, errors, touched }: Props) => {
  return (
    <div className="cardForm">
      <div className="cardForm__row">
        <label className="gitfInfoForm__label" htmlFor="">
          Card Number
        </label>
        <FormInput
          className="cardForm__value"
          error={errors.number && touched.number ? errors.number : null}
          id="number"
          name="number"
          placeholder="1234 5678 1234 5678"
          type="text"
          maxLength={16}
          value={values?.a}
        />
      </div>
      <div className="cardForm__row">
        <label className="cardForm__label" htmlFor="">
          expiryMonth
        </label>
        <FormInput
          className="cardForm__value"
          error={errors.expiryMonth && touched.expiryMonth ? errors.expiryMonth : null}
          id="expiryMonth"
          name="expiryMonth"
          placeholder=""
          type="text"
          maxLength={2}
          value={values?.expiryMonth}
        />
      </div>
      <div className="cardForm__row">
        <label className="cardForm__label" htmlFor="">
          expiryYear
        </label>
        <FormInput
          className="cardForm__value"
          error={
            errors.expiryYear && touched.expiryYear ? errors.expiryYear : null
          }
          id="expiryYear"
          name="expiryYear"
          placeholder=""
          type="text"
          maxLength={2}
          value={values?.expiryYear}
        />
      </div>
      <div className="cardForm__row">
        <label className="cardForm__label" htmlFor="">
          CVV2
        </label>
        <FormInput
          className="cardForm__value"
          error={errors.cvv2 && touched.cvv2 ? errors.cvv2 : null}
          id="cvv2"
          name="cvv2"
          placeholder=""
          type="text"
          maxLength={3}
          value={values?.cvv2}
        />
      </div>
    </div>
  );
};
