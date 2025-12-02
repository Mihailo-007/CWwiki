import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Битви Війни Клонів</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Студент:</Text>
        <Text style={styles.text}>Каракай Михайло</Text>

        <Text style={styles.label}>Група:</Text>
        <Text style={styles.text}>СПР311</Text>

        <Text style={styles.label}>Вік:</Text>
        <Text style={styles.text}>18</Text>

        <Text style={styles.label}>Призначення роботи:</Text>
        <Text style={styles.text}>
          Додаток з інформацією про важливі битви Війн Клонів
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },

  box: {
    backgroundColor: "#1b1b1b",
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2a72ff",
  },

  label: {
    color: "#8aaaff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  },

  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6
  },
});
