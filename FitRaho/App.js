import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome, onboarding,Organs,Female,Bodymeasurements,Details,Dosha,home,} from './screens';
import Dhanur from "./yoga_poses/Dhanur";
import Pawan from "./yoga_poses/Pawan"; 
import Shirsha from "./yoga_poses/Shirsha";
import Sarvang from "./yoga_poses/Sarvang";
import matsya from "./yoga_poses/matsya"; 
import Vaata from "./ayurvedic/Vaata";
import Kapha from "./ayurvedic/Kapha";
import Pitta from "./ayurvedic/Pitta";
import Slider from "./components/Slider";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" component={onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Bodymeasurements" component={Bodymeasurements} options={{ headerShown: false }} />
        <Stack.Screen name="Organs" component={Organs} options={{ headerShown: false }} />
        <Stack.Screen name="Female" component={Female} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} /> 
        <Stack.Screen name="Dosha" component={Dosha} options={{ headerShown: false }} /> 
        <Stack.Screen
          name="home"
          component={home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Pitta"
          component={Pitta}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Vaata"
          component={Vaata}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Kapha"
          component={Kapha}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dhanur"
          component={Dhanur}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Pawan"
          component={Pawan}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Shirsha"
          component={Shirsha}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Sarvang"
          component={Sarvang}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="matsya"
          component={matsya}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

    
