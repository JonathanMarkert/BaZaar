import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import React, { useContext } from "react";
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
import { AuthContext } from "../contexts/AuthContext";
import { IProduct, useProductContext } from "../contexts/ProductContext";
import Theme from "./Theme";

type validationSchema = Record<
  keyof Omit<IProduct, "id" | "userId" | "city" | "latitude" | "longitude">,
  yup.AnySchema
>;

const addProductValidation = yup.object().shape<validationSchema>({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().notRequired().max(250, "keep it simple..."),
  imageUri: yup.string().notRequired(),
  category: yup.string().required("pick one"),
  phone: yup.number().min(10, "to short").required(),
  email: yup.string().email().required(),
});

interface Props {
  onSubmitSuccess: () => void;
}

export default function AddProductForm({ onSubmitSuccess }: Props) {
  const { dispatch } = useProductContext();
  const { user } = useContext(AuthContext);

  const defaultFormData: IProduct = {
    id: "",
    name: "",
    price: "",
    description: "",
    imageUri: "",
    category: "",
    userId: user.id,
    city: user.city,
    phone: user.phone,
    email: user.email,
    latitude: user.latitude,
    longitude: user.longitude,
  };

  const pickImage = async (
    setFieldValue: (field: keyof IProduct, value: string) => void
  ) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFieldValue("imageUri", result.uri);
    }
  };

  return (
    <>
      <Formik
        initialValues={defaultFormData}
        validationSchema={addProductValidation}
        onSubmit={(values) => {
          dispatch({ type: "create-listing", payload: values });
          onSubmitSuccess();
        }}
      >
        {({
          setFieldValue,
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
            <ScrollView bounces={false} style={styles.scrollView}>
              <View style={styles.formContainer}>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Title"
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      returnKeyType="next"
                    ></TextInput>
                  </View>
                  {errors.name && touched.name && (
                    <Text style={styles.errors}>{errors.name}</Text>
                  )}
                </View>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Price"
                      onChangeText={handleChange("price")}
                      onBlur={handleBlur("price")}
                      value={values.price}
                      returnKeyType="next"
                    ></TextInput>
                  </View>
                  {errors.price && touched.price && (
                    <Text style={styles.errors}>{errors.price}</Text>
                  )}
                </View>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Description"
                      onChangeText={handleChange("description")}
                      onBlur={handleBlur("description")}
                      value={values.description}
                      returnKeyType="next"
                      multiline={true}
                    ></TextInput>
                  </View>
                  {errors.description && touched.description && (
                    <Text style={styles.errors}>{errors.description}</Text>
                  )}
                </View>
                <View style={styles.pickerContainer}>
                  <View>
                    <Picker
                      enabled={true}
                      mode="dialog"
                      dropdownIconColor={Theme.colors.pickerDropDownColor}
                      onValueChange={handleChange("category")}
                      selectedValue={values.category}
                      prompt="Choose a Category"
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
                </View>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Phone"
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                      returnKeyType="next"
                    ></TextInput>
                  </View>
                  {errors.phone && touched.phone && (
                    <Text style={styles.errors}>{errors.phone}</Text>
                  )}
                </View>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      returnKeyType="next"
                    ></TextInput>
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errors}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.formInputContainer}>
                  <View style={styles.formInputInnerContainer}>
                    {values.imageUri !== "" && (
                      <TextInput
                        style={styles.formInput}
                        placeholder="Image"
                        onChangeText={handleChange("imageUri")}
                        onBlur={handleBlur("imageUri")}
                        value={values.imageUri}
                        editable={false}
                        returnKeyType="next"
                        multiline={true}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    style={[styles.ImgButton, styles.buttonColor]}
                    onPress={() => pickImage(setFieldValue)}
                  >
                    <Text style={styles.buttonText}>Pick a image</Text>
                  </TouchableOpacity>
                  {errors.imageUri && touched.imageUri && (
                    <Text style={styles.errors}>{errors.imageUri}</Text>
                  )}
                </View>
              </View>
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
                        : Theme.colors.secondary,
                    },
                  ]}
                  onPress={() => {
                    handleSubmit() as any;
                  }}
                >
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              )}
              {Platform.OS === "ios" && (
                <Button
                  color={Theme.colors.bazaarBlue}
                  title="Confirm"
                  onPress={() => {
                    handleSubmit() as any;
                  }}
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
    height: "100%",
    width: "80%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: Theme.colors.lightBg,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingVertical: 20,
  },
  formInputContainer: {
    marginBottom: 20,
  },
  formInputInnerContainer: {
    flex: 1,
    borderRadius: 10,
    minHeight: 45,
    borderBottomColor: Theme.colors.borderButtonColor,
    borderBottomWidth: 2,
  },
  formInput: {
    alignItems: "center",
    borderRadius: 8,
    minHeight: 45,
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
  },
  pickerContainer: {
    marginVertical: 15,
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
    // padding: 15,
  },
  buttonColor: {
    backgroundColor: Theme.colors.bazaarBlue,
  },
  ImgButton: {
    width: "auto",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Theme.colors.buttonText,
    fontWeight: "bold",
  },
  errors: {
    fontSize: 14,
    color: Theme.colors.bazaarRed,
    fontWeight: "500",
    paddingHorizontal: 10,
  },
});
