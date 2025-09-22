
import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Header } from "@react-navigation/elements";
import { useMutation, useQuery } from "convex/react";
import { FlatList, StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;


export default function Index() {

   const isLoading = todos === undefined;

  if (isLoading) return <LoadingSpinner />;

  const renderToDoItem=()=>

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

    const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editingId === item._id;
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
                 <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
              style={[
                homeStyles.checkboxInner,
                { borderColor: item.isCompleted ? "transparent" : colors.border },
              ]}
            >
              {item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
            </LinearGradient>
          </TouchableOpacity>

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
      <FlatList
        data={todos}
        renderItem={renderToDoItem}
        keyExtractor={(item) => item._id}
        style={homeStyles.todoList}
        contentContainerStyle={homeStyles.todoListContent}
           ListEmptyComponent={<EmptyState />}
          // showsVerticalScrollIndicator={false}
        />
     
    </SafeAreaView>
    </linearGradient>
  );
}


