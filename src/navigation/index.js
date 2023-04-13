import { createStackNavigator } from "@react-navigation/stack";
import Description from "../screens/Description";
import Home from "../screens/Home";
import { colors } from "../utils/colors";
const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Movies",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.black },
        }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.black },
        })}
      />
    </Stack.Navigator>
  );
};
