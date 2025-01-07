import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

//components material
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/AppFormPicker";
import FormImmagePicker from "../components/forms/FormImmagePicker";

//custom hooks
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1,"Please Select atleast one image"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Cloths", value: 2 },
  { label: "Cars", value: 3 },
];





function ListingEditScreen({navigation}) {
  // const [images,setImages]=useState([]);

const location=useLocation();
  
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images:[],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImmagePicker name="images"/>
        <AppFormField maxLength={255} name={"title"} placeholder={"Title"} />
        <AppFormField
          maxLength={8}
          name={"price"}
          placeholder={"Price"}
          keyboardType="numeric"
        />

        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
        />
        <AppFormField
          maxLength={255}
          name={"description"}
          placeholder={"Description"}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
export default ListingEditScreen;
