import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import styles from "./style";

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
