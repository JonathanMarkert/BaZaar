import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";

import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { IProduct } from "../contexts/ProductContext";
import Theme from "./Theme";
import { categories } from "../assets/DummyData/Category";

const defaultFormData: IProduct = {
  id: "",
  name: "",
  price: 0,
  description: "",
  imageUri: "",
  category: "",
  userId: "",
  city: "",
  phone: "",
  email: "",
  latitude: 0,
  longitude: 0,
};

type validationSchema = Record<
  keyof Omit<IProduct, "id" | "userId" | "latitude" | "longitude">,
  yup.AnySchema
>;

const addProductValidation = yup.object().shape<validationSchema>({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().notRequired().max(250, "keep it simple..."),
  imageUri: yup.string().notRequired(),
  category: yup.string().notRequired(),
  city: yup.string().required(),
  phone: yup.number().min(10, "to short").required(),
  email: yup.string().email().required(),
});

export default function AddProductForm() {
  return (
    <>
      <Formik
        initialValues={defaultFormData}
        validationSchema={addProductValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <View style={styles.root}>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.formInput}
                placeholder="title ?"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              ></TextInput>
              {errors.name && touched.name && (
                <Text style={styles.errors}>{errors.name}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="Price ?"
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price.toString()}
              ></TextInput>
              {errors.price && touched.price && (
                <Text style={styles.errors}>{errors.price}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="description ?"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
              ></TextInput>
              {errors.description && touched.description && (
                <Text style={styles.errors}>{errors.description}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="category ?"
                onChangeText={handleChange("category")}
                onBlur={handleBlur("category")}
                value={values.category}
              ></TextInput>

              <Picker
                enabled={true}
                style={styles.formInput}
                mode="dropdown"
                onValueChange={handleChange("category")}
                selectedValue={values.category}
              >
                {categories.map((item) => {
                  return (
                    <Picker.Item
                      label={item.name.toString()}
                      value={item.name.toString()}
                      key={item.id.toString()}
                    />
                  );
                })}
              </Picker>

              {errors.category && touched.category && (
                <Text style={styles.errors}>{errors.category}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="city ?"
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                value={values.city}
              ></TextInput>
              {errors.city && touched.city && (
                <Text style={styles.errors}>{errors.city}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="phone ?"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              ></TextInput>
              {errors.phone && touched.phone && (
                <Text style={styles.errors}>{errors.phone}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="email ?"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              ></TextInput>
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.formInput}
                placeholder="Image ?"
                onChangeText={handleChange("imageUri")}
                onBlur={handleBlur("imageUri")}
                value={values.imageUri}
              ></TextInput>
              {errors.imageUri && touched.imageUri && (
                <Text style={styles.errors}>{errors.imageUri}</Text>
              )}
            </View>

            {/* ButtonSection for Android or IOS */}
            <View style={styles.center}>
              {Platform.OS === "android" && (
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: isValid
                        ? Theme.colors.bazaarBlue
                        : "grey",
                    },
                  ]}
                  onPress={handleSubmit as (values: any) => void}
                >
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              )}
              {Platform.OS === "ios" && (
                <Button
                  color={Theme.colors.bazaarBlue}
                  title="Confirm"
                  onPress={handleSubmit as (values: any) => void}
                />
              )}
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  formInput: {
    marginVertical: 8,
    borderRadius: 8,
    height: 38,
    width: 200,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  errors: {
    fontSize: 14,
    color: Theme.colors.bazaarRed,
    fontWeight: "500",
  },
});
