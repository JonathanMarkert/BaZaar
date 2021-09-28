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
  const [showPassword, setShowPassword] = useState(false);
  //   const {
  //     register,
  //     handleSubmit,
  //     control,
  //     formState: { errors },
  //   } = useForm<IFormValues>({
  //     resolver: yupResolver(loginValidationSchema),
  //   });

  // const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) =>
  //   console.log(data);

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
          <View>
            <Text>Kalletjomme</Text>
            <SizedContainer height={10} />
            <TextInput
              style={styles.form}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <TextInput
              style={styles.form}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              secureTextEntry={showPassword}
            />
            {/* lägg till ikon kanske med showPassword? detta : eller detta */}
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}
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
    height: "100%",
    width: "100%",
    flex: 1,
  },
  title: {
    color: Theme.colors.bazaarBlue,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
  },
  subTitle: {
    color: Theme.colors.bazaarRed,
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
  },
  button: {
    alignItems: "center",
    backgroundColor: Theme.colors.bazaarRed,
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 22,
  },
  inputText: {
    color: Theme.colors.bazaarBlue,
    flex: 1,
  },
  form: {
    alignItems: "center",
    backgroundColor: Theme.colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 16,
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
