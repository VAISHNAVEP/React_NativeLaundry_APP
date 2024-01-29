import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home';
import MapScreen from '../Map/Map';
import SaveAddress from '../SaveAddress CRUD';
import Profile from '../Profile/Profile';
import Agreement from '../Agreement';
import Splash from '../Splash';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import InitialSlider from '../InitialSlider';
import InitialSliderOne from '../InitialSliderOne';
import LoginWithPhone from '../LoginWithPhone';
import Washing from '../BookForWashing';
import BookingConfirmed from '../BookingConfirmed';
import ServiceCopy from '../ServiceCopy';
import Notification from '../Notification';
import RazorPay from '../RazorPay';
import ProfileView from '../ProfileView';
import History from '../History';
import HistoryInProgress from '../HistoryInProgress';
import OrderId from '../OrderId';
import OrderIdPay from '../OrderIdPay/OrderIdPay';
import OrderIdCancelBooking from '../OrderIdCancelBooking';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomTabBar from '../Common/CustomFooter/CustomFooter';
import CustomDrawer from '../Common/CustomDrawer/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="signin">
    <Stack.Screen name="signup" component={SignUp} />
    <Tab.Screen name="signin" component={SignIn} />
    <Stack.Screen name="splash" component={Splash} />
    <Stack.Screen name="phone" component={LoginWithPhone} />
    <Stack.Screen name="initialslider" component={InitialSlider} />
    <Stack.Screen name="initialsliderone" component={InitialSliderOne} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{headerShown: false}}
    tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="saveaddress"
      component={SaveAddress}
      options={{
        tabBarLabel: 'Crud',
        tabBarIcon: ({color, size}) => (
          <FontAwesome6 name="address-card" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="razorpay"
      component={RazorPay}
      options={{
        tabBarLabel: 'RazorPay',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="card-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="map"
      component={MapScreen}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="map-marker-alt" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  //initially render splash screen//
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: 'lightblue',
          drawerActiveTintColor: 'green',
          drawerInactiveTintColor: 'black',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          screenOptions={{headerShown: false}}
        />

        <Drawer.Screen
          name="washing"
          component={Washing}
          options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome5
                name="hand-holding-water"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="bookingconfirmed"
          component={BookingConfirmed}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons
                name="checkmark-done-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="service"
          component={ServiceCopy}
          options={{
            drawerIcon: ({color, size}) => (
              <MaterialIcons
                name="miscellaneous-services"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="notification"
          component={Notification}
          options={{
            drawerIcon: ({color, size}) => (
              <MaterialIcons
                name="notifications-active"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="orderid"
          component={OrderId}
          options={{
            drawerIcon: ({color, size}) => (
              <Entypo name="text-document" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="orderidcancelbooking"
          component={OrderIdCancelBooking}
          options={{
            drawerIcon: ({color, size}) => (
              <Entypo name="text-document" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="orderidpay"
          component={OrderIdPay}
          options={{
            drawerIcon: ({color, size}) => (
              <Entypo name="text-document" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="history"
          component={History}
          options={{
            drawerIcon: ({color, size}) => (
              <MaterialIcons name="history" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="historyinprogress"
          component={HistoryInProgress}
          options={{
            drawerIcon: ({color, size}) => (
              <MaterialIcons name="history" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="agreement"
          component={Agreement}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons
                name="document-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Stack.Screen
          name="profileview"
          component={ProfileView}
          options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
