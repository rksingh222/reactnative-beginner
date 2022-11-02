//iOS  react native vector icon and Font Awesome

//1. Run this in terminal or iterm    ——  $ npm install --save react-native-vector-icons — done
//2. Go to IOS folder in your current project which was projectone — done
//3. Open projectone.xcodeproj in Xcode — done
//4. Browse to node_modules/react-native-vector-icons  — done
//5. Drag Fonts folder inside the same project folder of AppDelegate - 
//6. Once dragged it will show a pop up  select destination - copy items if needed , added folder - create groups , add to targets - projectone 
//7. Go to info.plist  which is located at ios/projectone(my project directory name)/info.plist
//8. Copy this because I am adding all the fonts . If you want to use specific font then take that
//<key>UIAppFonts</key>
//<array>
// <string>AntDesign.ttf</string>
// <string>Entypo.ttf</string>
// <string>EvilIcons.ttf</string>
// <string>Feather.ttf</string>
// <string>FontAwesome.ttf</string>
// <string>FontAwesome5_Brands.ttf</string>
// <string>FontAwesome5_Regular.ttf</string>
// <string>FontAwesome5_Solid.ttf</string>
// <string>Foundation.ttf</string>
// <string>Ionicons.ttf</string>
// <string>MaterialIcons.ttf</string>
// <string>MaterialCommunityIcons.ttf</string>
// <string>SimpleLineIcons.ttf</string>
// <string>Octicons.ttf</string>
// <string>Zocial.ttf</string>
// <string>Fontisto.ttf</string>
//</array>
//9. cd ios  
//10. Pod install
//11  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//12. Add the necessary code to add icon for example you can just add this
//13. const icon = <FontAwesome5 name={'comments'} solid />;
//14. const icon = <FontAwesome5 name={'git'} brand />;
//15. When I built my application I got error regarding duplication
//16. Go to Xcode -> projectone (which is my project name under ios directory when I opened projectone.xcodeproj )
//17. In projectone->build phases-> copy bundle resources ->delete all the fonts leaving storyboard and assets
//18. Select - remove all the ttf
//19. When I did this I built it again and it successfully shown font awesome icon. You can use material icon or any other icon supported mentioned in vector icon

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
            }
            return <FontAwesome5 name={iconName} />;
          },
        })}>
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;



