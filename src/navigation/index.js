import { createStackNavigator } from "@react-navigation/stack";
import Description from "../screens/Description";
import Home from "../screens/Home";
import { colors } from "../utils/colors";
const Stack = createStackNavigator();

export const RootNavigation = () => {
  const config = {
    animation: "easing",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
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
          cardStyleInterpolator: forFade,
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
          cardStyleInterpolator: forFade,
        })}
      />
    </Stack.Navigator>
  );
};
