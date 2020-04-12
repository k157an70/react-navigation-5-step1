import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';


const HeaderRight = () => {
   const menuRef = React.useRef(null);
   const navigate = useNavigation();

   const showMenu = () => menuRef.current.show();
   const hideMenu = routeName => {
      navigate.navigate(routeName, {
         routeName 
      });
       menuRef.current.hide();
   }

   return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
         <Icon name="refresh" size={25} color="grey" style={{ paddingRight: 5 }} />
         
         <Menu
            ref={menuRef}
            button={
               <Icon name="ellipsis-v" onPress={showMenu} size={25} color="grey" style={{ paddingHorizontal: 15 }} />
            }
         >
            <MenuItem onPress={() => hideMenu('Java')}>Java</MenuItem>
            <MenuDivider />
            <MenuItem onPress={()=> hideMenu('JavaScript')}>Java Script</MenuItem>
            <MenuDivider />
            <MenuItem onPress={() => hideMenu('ReactNative')}>React Native</MenuItem>
         </Menu>
      </View>
   )
}

export default HeaderRight
