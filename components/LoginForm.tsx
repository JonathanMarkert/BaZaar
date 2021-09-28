import { MaterialIcons } from "@expo/vector-icons";
import IonIcons from "@expo/vector-icons/Ionicons";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import SizedContainer from "./SizedContainer";
import Theme from "./Theme";

interface IFormValues {
  email: string;
  password: string;
}

const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("hello.. password ?"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <Formik
        initialValues={{ email: "user@email.com", password: "" }}
        validationSchema={loginValidationSchema}
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
          <View>
            <View style={styles.titleStyle}>
              <Text style={styles.title}>Hey Buddy!</Text>
              <Text style={styles.subtitle}>interrested in some wares ?</Text>
            </View>
            <SizedContainer height={40} />
            <View>
              <View style={styles.row}>
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                <IonIcons
                  name={
                    errors.email
                      ? "alert-circle-outline"
                      : "checkmark-circle-outline"
                  }
                  style={{ color: !errors.email ? "green" : "red" }}
                  size={30}
                />
              </View>
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
            </View>
            <View>
              <View style={styles.row}>
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
            </View>
            <SizedContainer height={70} />
            <Button
              color={Theme.colors.bazaarBlue}
              disabled={!isValid}
              onPress={() => handleSubmit}
              title="Login"
            />
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 15,
    color: Theme.colors.bazaarBlue,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginTop: 10,
    color: Theme.colors.border,
    fontSize: 15,
    lineHeight: 20,
  },
  inputText: {
    color: Theme.colors.bazaarBlue,
  },
  formInput: {
    alignItems: "center",
    borderRadius: 8,
    height: 38,
    width: 200,
    paddingHorizontal: 16,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  errors: {
    fontSize: 14,
    color: Theme.colors.bazaarRed,
    fontWeight: "500",
    marginTop: 5,
  },
});
