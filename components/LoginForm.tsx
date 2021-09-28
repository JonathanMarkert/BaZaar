import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Theme from "./Theme";
import { Formik } from "formik";
import SizedContainer from "./SizedContainer";
import IonIcons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

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
        initialValues={{ email: "", password: "" }}
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
          <View style={styles.root}>
            <Text style={styles.title}>Cobalt Dry</Text>
            <SizedContainer height={10} />
            <View>
              <View style={styles.row}>
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                {errors.email && touched.email && <Text>{errors.email}</Text>}
                <IonIcons
                  name={
                    showPassword ? "checkmark-circle-outline" : "alert-outline"
                  }
                  size={20}
                />
              </View>
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
                {errors.password && touched.password && (
                  <Text>{errors.password}</Text>
                )}
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={20}
                />
              </View>
            </View>

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
  root: {
    backgroundColor: Theme.colors.background,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Theme.colors.bazaarBlue,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
    justifyContent: "center",
    alignItems: "center",
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
});

// <View style={styles.root}>
//   <Text style={styles.title}>Hi!</Text>
//   <SizedContainer height={8} />
//   <Text style={styles.subTitle}>subtitle text</Text>
//   <SizedContainer height={30} />

//   <View style={styles.form}>
//     <Text>Email</Text>
//     <Controller
//       control={control}
//       defaultValue=""
//       render={({ field: { onChange, onBlur, value } }) => (
//         <TextInput
//           {...register("email")}
//           style={styles.inputText}
//           onBlur={onBlur}
//           onChangeText={(value) => onChange(value)}
//           autoCapitalize="none"
//           autoCompleteType="email"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="next"
//           textContentType="username"
//           value={value}
//         />
//       )}
//       name="email"
//       rules={{ required: true }}
//     />
//   </View>
//   <View style={styles.form}>
//     <Text>Password</Text>
//     <Controller
//       control={control}
//       defaultValue=""
//       render={({ field: { onChange, onBlur, value } }) => (
//         <TextInput
//           {...register("password")}
//           style={styles.inputText}
//           onBlur={onBlur}
//           onChangeText={(value) => onChange(value)}
//           autoCapitalize="none"
//           autoCompleteType="password"
//           autoCorrect={false}
//           secureTextEntry
//           returnKeyType="done"
//           textContentType="password"
//           value={value}
//         />
//       )}
//       name="password"
//       rules={{ required: true }}
//     />
//   </View>

//   <SizedContainer height={15} />

//   <View>
// <Button
//   color={Theme.colors.bazaarBlue}
//   title="Login"
//   onPress={handleSubmit(onSubmit)}
//     />
//   </View>
// </View>
