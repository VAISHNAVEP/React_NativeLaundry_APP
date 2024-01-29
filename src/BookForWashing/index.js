import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import colors from '../Common/colors';

const Washing = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const handleDateConfirm = selectedDate => {
    hideDatePicker();
    setDate(selectedDate);
  };

  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);
  const handleTimeConfirm = selectedTime => {
    hideTimePicker();
    setTime(
      selectedTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    );
  };

  const handleConfirmBooking = async () => {
    try {
      const db = firestore();

      await db.collection('booking').add({
        date,
        time,
        fromAddress,
        quantity,
      });
      Snackbar.show({
        text: 'Booking Successfull',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor:colors.primarygreen,
        textColor: 'white',
      });

      navigation.navigate('bookingconfirmed');
    } catch (error) {
      console.error('Error adding booking data to Firestore: ', error);
    }
  };

  const combinedDateTime = `${date} ${time}`;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={style.headerContainer}>
          <Text style={style.heading}>Washing</Text>
          <Entypo name="bell" size={35} style={style.bellIcon} />
        </View>
        <Text style={style.text}>
          Donec sed odio dui.Fusce dapilbus,tellus ac cursus commodo, tortor
          mauris condimentum
        </Text>
        <Text style={style.head}>When</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={{marginLeft: 20, color: 'green'}}
            placeholder="Select Date and Time"
            editable={false}
            value={combinedDateTime}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={style.head}>From</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={{marginLeft: 20, color: 'green'}}
          placeholder="Enter address"
          onChangeText={text => setFromAddress(text)}
        />

        <Text style={style.head}>Quantity</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={{marginLeft: 20, color: 'green'}}
          placeholder="Enter Quantity"
          keyboardType="numeric"
          onChangeText={text => setQuantity(text)}
        />
        <TouchableOpacity style={style.touch} onPress={handleConfirmBooking}>
          <Text style={style.confirm}>Confirm Booking</Text>
        </TouchableOpacity>
        <Text style={style.note}>Note:</Text>
        <Text style={style.noteone}>
          Price is decided by the pickup man at the time of collecting your
          clothes
        </Text>
      </View>
    </ScrollView>
  );
};

export default Washing;
