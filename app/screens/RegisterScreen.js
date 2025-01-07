import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { useFormikContext } from "formik";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().min(1).label("Email"),
  password: Yup.string().required().min(1).label("Password"),
  passwordConfirmation: Yup.string().required().min(1).label("Confirmation"),
});
function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField icon={"account"} name="name" placeholder="Name" />
        <AppFormField
          icon={"mail"}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AppFormField
          icon={"lock"}
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <AppFormField
          icon={"lock"}
          name="passwordConfirmation"
          placeholder="Confirm password"
          secureTextEntry
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default RegisterScreen;
