import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../src/utils/colors';

export default function Footer(props) {
  const {calcular} = props;
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.buttonCal} onPress={calcular}>
        <Text style={styles.calculate}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    viewFooter:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        height: 100,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonCal:{
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 16,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        width: "75%"
    },
    calculate:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    }
});
