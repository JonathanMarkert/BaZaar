import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import { categories } from "../assets/DummyData/Category";
import { IProduct } from "../contexts/ProductContext";
import Theme from "./Theme";

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
  category: yup.string().required("pick one"),
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
          values,
          touched,
          errors,
          isValid,
        }) => (
          <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}
          >
            <ScrollView bounces={false} style={styles.flexOne}>
              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="title ?"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.name && touched.name && (
                <Text style={styles.errors}>{errors.name}</Text>
              )}

              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="Price ?"
                  onChangeText={handleChange("price")}
                  onBlur={handleBlur("price")}
                  value={values.price.toString()}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.price && touched.price && (
                <Text style={styles.errors}>{errors.price}</Text>
              )}

              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="description ?"
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.description && touched.description && (
                <Text style={styles.errors}>{errors.description}</Text>
              )}

              <View>
                <Picker
                  enabled={true}
                  mode="dialog"
                  dropdownIconColor={Theme.colors.buttonText}
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
              </View>
              {errors.category && touched.category && (
                <Text style={styles.errors}>{errors.category}</Text>
              )}
              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="city ?"
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  value={values.city}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.city && touched.city && (
                <Text style={styles.errors}>{errors.city}</Text>
              )}

              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="phone ?"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.phone && touched.phone && (
                <Text style={styles.errors}>{errors.phone}</Text>
              )}
              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="email ?"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <View style={styles.formInputContainer}>
                <TextInput
                  placeholder="Image ?"
                  onChangeText={handleChange("imageUri")}
                  onBlur={handleBlur("imageUri")}
                  value={values.imageUri}
                  returnKeyType="next"
                ></TextInput>
              </View>
              {errors.imageUri && touched.imageUri && (
                <Text style={styles.errors}>{errors.imageUri}</Text>
              )}
            </ScrollView>

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
          </KeyboardAvoidingView>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    // height: "100%",
    // width: "80%",
  },
  flexOne: {
    flex: 1,
    backgroundColor: Theme.colors.primary95,
    borderRadius: 20,
  },
  formInputContainer: {
    flex: 1,
    borderRadius: 10,
    height: 30,
    margin: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
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
    color: Theme.colors.buttonText,
    fontWeight: "bold",
  },
  errors: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    color: Theme.colors.bazaarRed,
    fontWeight: "500",
  },
});
