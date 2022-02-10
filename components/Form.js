// snippet rnfs
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import colors from '../src/utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function form(props) {
  const {setCapital, setInteres, setMeses} = props;
  
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
          <TextInput placeholder='Cantidad a pedir' 
          keyboardType='numeric' 
          style={styles.input}
          onChange={(e)=>setCapital(e.nativeEvent.text)}
          />
          <TextInput placeholder='Interés %' 
          keyboardType='numeric' 
          style={[styles.input,styles.inputPercentage]}
          onChange={(e)=>setInteres(e.nativeEvent.text)}
          />
      </View>
      <RNPickerSelect
            placeholder={{label:"Selecciona los meses...", 
                          value:null}}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            onValueChange={(value) => setMeses(value)}
            items={[
                { label: '3 Meses', value: 3 },
                { label: '6 Meses', value: 6 },
                { label: '12 Meses', value: 12 },
                { label: '24 Meses', value: 24 },
            ]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    viewForm:{
        position:"absolute",
        bottom: 0,
        width: "85%",
        height: 180,
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR,
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        justifyContent: "center",
        marginBottom:10
    },
    viewInput:{
        flexDirection: "row",
    },
    input:{
        height: 50,
        backgroundColor:"#fff" ,
        borderWidth:1,
        borderColor:colors.PRIMARY_COLOR,
        color: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        width:"60%",
        marginRight: 5,
        marginLeft:-5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPercentage:{
        width:"40%",
        marginLeft:5
    }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS:{
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal:10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 40,
    color: "black",
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5
  },
  inputAndroid:{
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal:10,
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: '#fff',
  }
});