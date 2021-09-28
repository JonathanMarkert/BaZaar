import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Theme from "./Theme";
import SizedContainer from "./SizedContainer";

interface IFormValues {
  email: string;
  password: string;
}

const schemaValidation = yup
  .object({
    email: yup.string().email("email req").required("req req"),
    password: yup.string().required("hello.. password ?"),
  })
  .required();

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) =>
    console.log(data);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hi!</Text>
      <SizedContainer height={8} />
      <Text style={styles.subTitle}>subtitle text</Text>
      <SizedContainer height={30} />

      <View style={styles.form}>
        <Text>Email</Text>
        <Controller
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              {...register("email")}
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              textContentType="username"
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
      </View>
      <View style={styles.form}>
        <Text>Password</Text>
        <Controller
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              {...register("password")}
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry
              returnKeyType="done"
              textContentType="password"
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
      </View>

      <SizedContainer height={15} />

      <View>
        <Button
          color={Theme.colors.bazaarBlue}
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
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

//   <form onSubmit={handleSubmit(onSubmit)}>
//     <label htmlFor="email">Email</label>
//     <input {...register("email")} />
//     <p>{errors.email?.message}</p>
//     <label htmlFor="password">Password</label>
//     <input {...register("password")} autoComplete="off" />
//     <p>{errors.password?.message}</p>
//     <input type="submit" />
//   </form>;

// <View>
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <Text>Email</Text>
//     <TextInput {...register("email")} />
//     <Text>{errors.email?.message}</Text>
//     <Text>Password</Text>
//     <TextInput {...register("password")} />
//     <Text>{errors.password?.message}</Text>
//   </form>
//   ;
//   <Button title="Submit" onPress={handleSubmit(onSubmit)} />
// </View>

// <View>
//   <View style={styles.row}>
//     <IonIcons
//       name="mail-outline"
//       size={20}
//       color={Theme.colors.secondary}
//     />
//     <Text style={styles.label}>Email</Text>
//   </View>

//   <Controller
//     control={control}
//     defaultValue=""
//     render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         style={styles.input}
//         onBlur={onBlur}
//         onChangeText={(value) => onChange(value)}
//         value={value}
//       />
//     )}
//     name="email"
//     rules={{ required: true }}
//   />

//   <View style={styles.row}>
//     <IonIcons
//       name="lock-closed-outline"
//       size={20}
//       color={Theme.colors.secondary}
//     />
//     <Text style={styles.label}>Password</Text>
//   </View>

//   <Controller
//     control={control}
//     defaultValue=""
//     render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         style={styles.input}
//         onBlur={onBlur}
//         onChangeText={(value) => onChange(value)}
//         value={value}
//       />
//     )}
//     name="password"
//     rules={{ required: true }}
//   />
//   <View style={styles.buttonstyle}>
//     <Button
//       color={Theme.colors.bazaarBlue}
//       title="Login"
//       onPress={handleSubmit(onSubmit)}
//     />
//   </View>
// </View>
