import React, {useState} from 'react';
import {Modal, View, TextInput, Button, StyleSheet} from 'react-native';

const AddressModal = ({isVisible, onClose, onSave, initialAddress}) => {
  const [editedAddress, setEditedAddress] = useState(initialAddress);

  const handleSave = () => {
    onSave(editedAddress);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <TextInput
          style={styles.input}
          placeholder="Edit Address"
          value={editedAddress}
          onChangeText={text => setEditedAddress(text)}
        />
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10,
  },
});

export default AddressModal;
