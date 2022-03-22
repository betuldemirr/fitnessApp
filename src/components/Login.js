import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, TextInput, Dimensions, View, ImageBackground, Subheading, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
//import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/core";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function Login() {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const goHomePage = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
      renderWrongPass();
    }
  }
  function renderLogo() {
    return (
      <View style={{ flex: 0.33, width: "100%", alignItems: "center", height: '25%', justifyContent: "center" }}>
        <Image source={require('./logo.png')} resizeMode='contain' style={{ height: w * 0.3, aspectRatio: 1, top: "2%" }} />
        <Text style={{ color: 'white', fontSize: w * 0.1, fontWeight: 'bold', textAlign: 'center', top: "2%" }}>
          FitnessApp
        </Text>
      </View>
    )
  }
  function renderInputs() {
    return (
      <View style={{ flex: 0.3, width: "100%", height: "20%", alignItems: "center", justifyContent: "space-around" }}>
        {!!error && (
          <Subheading
            style={{ color: "red", textAlign: "center", marginBottom: 16 }}
          >
            {error}
          </Subheading>
        )}
        <TextInput
          placeholder='Adı Soyadı'
          placeholderTextColor='grey'
          maxLength={30}
          onChangeText={text => setName(text)}
          value={name}
          style={{ borderRadius: w * 0.05, fontSize: w * 0.035, opacity: 0.8, textAlign: 'center', backgroundColor: '#EDEDED', borderBottomWidth: 1.3, borderColor: "#FFD523", width: w * 0.7, height: h * 0.075}} />
        <TextInput
          placeholder='E-mail'
          placeholderTextColor='grey'
          maxLength={30}
          onChangeText={text => setEmail(text)}
          value={email}
          style={{ borderRadius: w * 0.05, fontSize: w * 0.035, opacity: 0.8, textAlign: 'center', backgroundColor: '#EDEDED', borderBottomWidth: 1.3, borderColor: "#FFD523", width: w * 0.7, height: h * 0.075, }} />
        <TextInput
          placeholderTextColor='grey'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder='Şifre'
          style={{ borderRadius: w * 0.05, fontSize: w * 0.035, opacity: 0.8, textAlign: 'center', backgroundColor: '#EDEDED', borderBottomWidth: 1.3, borderColor: "#FFD523", width: w * 0.7, height: h * 0.075}} />
      </View>
    )
  }
  function renderNavigateItems() {
    return (
      <View style={{ flex: .3, width: "100%", height: "20%", alignItems: "center" }}>
        <TouchableOpacity style={{ backgroundColor: '#FFD523', width: '50%', aspectRatio: 4, justifyContent: 'center', alignItems: 'center', borderRadius: w * 0.05, marginTop: 10, }}
          onPress={() => goHomePage()} loading={isLoading}>
          <Text style={{ color: 'white', fontSize: w * 0.035 }}>
            Giriş Yap
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ color: 'white', fontSize: w * 0.035, }}>Hesabın yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Kayit')}>
            <Text style={{ color: '#FFD523', fontSize: w * 0.035, }}
            onPress={() => navigation.navigate('Kayit')}> Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderFrimaLogo() {
    return (
      <View style={{ opacity: 0.7, position: 'absolute', bottom: 15, flexDirection: 'row' }}>
        <Image source={require('./frimaLogo.png')} style={{ bottom: 5, aspectRatio: 1, width: w * 0.07 }} />
        <Text style={{ color: 'white', fontSize: w * 0.035, }}> from Finike</Text>
      </View>
    )
  }
  function renderWrongPass() {
    return (
      <View
        style={{ alignItems: 'center', justifyContent: 'center', width: '70%', height: '10%', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20, top: '23%', }}>
        <Text style={{ color: 'black' }}>
          Kullanıcı adı veya Şifre hatalı!
        </Text>
      </View>
    )
  }
  return (
    <ImageBackground source={require('./Midnight.jpg')}
      style={{ width: w, height: h, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.middlePanel}>
        {renderLogo()}
        {renderInputs()}
        {renderNavigateItems()}
        {renderFrimaLogo()}
        {state && renderWrongPass()}
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  middlePanel: {
    borderRadius: w * 0.05,
    alignSelf: "center",
    alignItems: 'center',
    width: "93%",
    height: '90%',
    backgroundColor: 'rgba(0, 1, 0, 0.3)',
    borderColor: '#FFD523',
    borderWidth: 1,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})

export default Login;

/*
      //setState(true);
      //setTimeout(() => setState(false), 1000);


      <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginTop: 8 }}>
            <Text style={{ color: '#FFD523', fontSize: w * 0.035, }}>
              {' '}
              Şifreni mi unuttun?
            </Text>
          </TouchableOpacity>
        </View>
*/