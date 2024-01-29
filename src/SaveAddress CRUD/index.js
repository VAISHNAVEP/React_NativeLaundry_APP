import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AddressModal from './AddressModal';
import Snackbar from 'react-native-snackbar';
import colors from '../Common/colors';

const SaveAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['green', 'red', 'blue', 'purple'];
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getAddress();
    }, []),
  );

  // Function to get data from firebase
  const getAddress = async () => {
    try {
      const snapshot = await firestore().collection('useraddress').get();

      if (!snapshot.empty) {
        const result = [];
        snapshot.docs.forEach(doc => {
          if (doc.exists) {
            result.push({id: doc.id, ...doc.data()});
          }
        });
        setAddresses(result);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleEditPress = address => {
    setSelectedAddress(address);
    setModalVisible(true);
  };

  // Function to edit the data
  const handleSaveAddress = async updatedAddress => {
    try {
      await firestore()
        .collection('useraddress')
        .doc(selectedAddress.id)
        .update({
          address: updatedAddress,
        });
      getAddress();
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  // Function to delete the data
  const handleDeleteAddress = async () => {
    try {
      await firestore()
        .collection('useraddress')
        .doc(selectedAddress.id)
        .delete();

      await getAddress();

      setModalVisible(false);
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  // Function to handle adding new address
  const handleAddNewAddress = () => {
    navigation.navigate('agreement');
  };

  //activity indicator color changing//
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size="large" color={colors[currentColorIndex]} />
        </View>
      )}

      <ScrollView
        contentContainerStyle={style.scrollViewContent}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={() => setIsLoading(true)}
        onScrollEndDrag={() => setIsLoading(false)}>
        {addresses.map((address, index) => (
          <View key={index} style={style.imgview}>
            <Image style={style.img} source={require('../images/yes.png')} />
            <Text style={{color: 'green', fontSize: 25}}>
              {address.address}
            </Text>
            <View style={style.imageContainer}>
              <TouchableOpacity onPress={() => handleEditPress(address)}>
                <Image
                  style={style.editimg}
                  source={require('../images/edit-green.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedAddress(address);
                  handleDeleteAddress();
                }}>
                <Image
                  style={style.deleteimg}
                  source={require('../images/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {!addresses.length && (
          <View style={style.imgview}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                style={style.editimg}
                source={require('../images/edit-green.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Delete action')}>
              <Image
                style={style.deleteimg}
                source={require('../images/delete.png')}
              />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={style.touch} onPress={handleAddNewAddress}>
          <Text style={style.address}>+ Add New Address</Text>
        </TouchableOpacity>

        <AddressModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveAddress}
          initialAddress={selectedAddress.address}
        />
      </ScrollView>
    </View>
  );
};

export default SaveAddress;
