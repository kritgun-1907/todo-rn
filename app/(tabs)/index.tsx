
import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Header } from "@react-navigation/elements";
import { useMutation, useQuery } from "convex/react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  const {toggleDarkMode, colors}=useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos= useQuery(api.todos.getTodos);
  console.log(todos);
  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodo = useMutation(api.todos.clearAllTodos);
  const updateTodo = useMutation(api.todos.updateTodo);
  return (
    <linearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
    <SafeAreaView
      style={homeStyles.safeArea}
    >
      <Text style={homeStyles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Header />
      <TodoInput />
      <TouchableOpacity onPress={toggleDarkMode}><text>toggle the mode</text></TouchableOpacity>
    </SafeAreaView>
    </linearGradient>
  );
}


