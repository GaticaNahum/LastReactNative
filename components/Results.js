import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Results(props) {
    const { errorM, total, capital, interes, meses } = props
    console.log({ errorM })
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.results}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResults label={"Cantidad solictiada:"} value ={capital}/>
                    <DataResults label={"Interes %:"} value ={interes}/>
                    <DataResults label={"Meses:"} value ={meses}/>
                    <DataResults label={"Pago mensual:"} value ={total.pagoMes}/>
                    <DataResults label={"Pago total:"} value ={total.pagoTotal}/> 
                </View>
            )}
            <View>
                <Text style={styles.errorM}>{errorM}</Text>
            </View>

        </View>
    )

}

const DataResults = (props) => {
    const { label, value } = props;
    return(
    <View style={styles.values}>
        <Text>{label}</Text>
        <Text>{value}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    errorM: {
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        fontSize: 25,

    },
    results: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20
    },
    content: {
        marginTop: 10,
        marginHorizontal: 40,
    },
    values: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
})