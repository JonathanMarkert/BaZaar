import { Formik } from "formik";
import React from "react";
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

const defaultFormData: IProduct = {
  id: "",
  name: "",
  price: 0,
  description: "",
  imageUri: "",
  category: "",
  userId: 0,
  city: "",
  phone: "",
  email: "",
  latitude: 0,
  longitude: 0,
};

export default function AddProductForm() {
  return (
    <>
      <Formik
        initialValues={defaultFormData}
        // validationSchema={addProductValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
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

              <TextInput
                style={styles.formInput}
                placeholder="Price ?"
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price.toString()}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="description ?"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="category ?"
                onChangeText={handleChange("category")}
                onBlur={handleBlur("category")}
                value={values.category}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="city ?"
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                value={values.city}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="phone ?"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="email ?"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              ></TextInput>

              <TextInput
                style={styles.formInput}
                placeholder="Image ?"
                onChangeText={handleChange("imageUri")}
                onBlur={handleBlur("imageUri")}
                value={values.imageUri}
              ></TextInput>
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
});
