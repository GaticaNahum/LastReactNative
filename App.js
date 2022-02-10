import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button, Image } from 'react-native';
import colors from './src/utils/colors';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
export default function App() {
  //useStateSnippet
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null)
  const [errorM, setErrorM] = useState(null)

  useEffect(() => {
    if(capital&&interes&&meses){
      calcular();
    }else{
      reset();
    }

    if(capital && interes && meses) calcular();
    else reset();
  }, [capital,interes,meses])
  //Sirve que cuando sufre alguna actualización algun efecto haga un cambio
  //Cuando se ejecuta un cambio en alguna de esas variables se va a realizar un cambio
  

  const calcular = () =>{
    reset()
    // console.log("cap -> "+capital+ ", int -> "+interes+", mes -> "+meses);
    if (!capital || !interes || !meses) {
      setErrorM("Hay campos vacíos!")
    }else{
      const inte = interes/100;
      const pays = capital/((1-Math.pow(inte+1, -meses))/inte)
      setTotal({
        pagoMes: pays.toFixed(2),
        pagoTotal: (pays*meses).toFixed(2)
      })
    }
  }

  const reset = () =>{
    setErrorM(''),
    setTotal(null)
  }

  return (
   <View style={styles.app} >
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.background}></View>
      <Text style={styles.titleApp}>Préstamos UTEZ</Text>
      <Form
      setCapital={setCapital}
      setInteres={setInteres}
      setMeses = {setMeses}/>
    </SafeAreaView>
    <Results errorM={errorM} 
            total={total}
            capital={capital}
            interes={interes}
            meses={meses}/>
    <Footer calcular={calcular}/>
   
   </View>
  );
}

const styles = StyleSheet.create({
  app:{
    width:"100%",
    height:"100%",
    backgroundColor: colors.BACKGROUND
  },
  safeArea:{
    //backgroundColor:colors.PRIMARY_COLOR_DARK,
    height: 300,
    alignItems: "center"
  },
  titleApp:{
    fontSize:25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height:200,
    width:"100%",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    position: "absolute",
    zIndex: -1
  },
  
});


