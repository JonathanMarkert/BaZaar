import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValues {
  email: string;
  password: string;
}

const schemaValidation = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
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
    <View>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
  },
  input: {
    fontSize: 10,
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
