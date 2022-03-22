import React, { Fragment, useState } from 'react'
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, Dimensions, View, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, } from 'react-native';
import firebase from '@react-native-firebase/app';
import { useNavigation } from "@react-navigation/core";

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const Kayit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigation = useNavigation();

  const createAccount = async () => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await response.user.updateProfile({ displayName: name });
      navigation.navigate('Login');
    } catch (e) {
      setIsLoading(false);
      alert(e.message);
    }    
  }
  function renderLogo() {
    return (
      <View
        style={{ flex: 1, width: w * 0.65, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
        <Image
          style={{ left: 0, width: w * 0.15, height: w * 0.15 }}
          source={require('./logo.png')}
        />
        <Text
          style={{ color: 'white', fontSize: w * 0.1, fontWeight: 'bold', textAlign: 'center', paddingLeft: 15}}>
          FitnessApp
        </Text>
      </View>
    )
  }
  function renderFacebookLogin() {
    return (
      <View
        style={{ flex: 1, width: w * 0.9, alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{ backgroundColor: '#4267B2', width: w * 0.5, height: h * 0.065, justifyContent: 'center', alignItems: 'center', borderRadius: w * 0.05}}>
          <Text style={{ color: "white", fontSize: w * 0.035 }}>Facebook ile Giriş Yap</Text>
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: w * 0.035 }}>____________ ya da ____________</Text>
      </View>
    )
  }
  function renderInputs() {
    return (
      <View style={{ flex: 2.5, width: w * 0.8, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholderTextColor='grey'
          placeholder='Adı Soyadı'
          value={name}
          onChangeText={text => setName(text)}
          style={styles.inputs} />
        <TextInput
          placeholderTextColor='grey'
          placeholder='E-posta'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputs} />
        <TextInput
          placeholderTextColor='grey'
          placeholder='Şifre'
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.inputs} />
      </View>
    )
  }
  function renderSignupButton() {
    return (
      <View style={{ flex: 1, width: w * 0.8, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#FFD523', width: w * 0.5, height: h * 0.065, justifyContent: 'center', alignItems: 'center', borderRadius: w * 0.05, }} 
        onPress={() => createAccount()} loading = {isLoading}>
          <Text style={{ color: "white", fontSize: w * 0.035 }} loading={isLoading}>
            Kaydol
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  function renderSingin() {
    return (
      <View style={{ flex: 1, width: w * 0.6, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={{ color: 'white', fontSize: w * 0.035 }}>
            Hesabın var mı?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            onPressIn={() => navigation.navigate('Login')}>
            <Text style={{ color: '#FFD523', fontSize: w * 0.035 }}>
              {' '}
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <ImageBackground source={require('./Midnight.jpg')} style={{ width: w, height: h, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0, 0, 31)" }}>
      <View style={styles.middlePanel}>
        {renderLogo()}
        {renderFacebookLogin()}
        {renderInputs()}
        {renderSignupButton()}
        {renderSingin()}
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  inputs: {
    marginTop: w * 0.02,
    borderRadius: w * 0.05,
    fontSize: w * 0.035,
    opacity: 0.8,
    textAlign: 'center',
    backgroundColor: '#EDEDED',
    borderBottomWidth: 1,
    borderColor: '#FFD523',
    width: w * 0.7,
    height: h * 0.075,
  },
  container: {
    flex: 1,
  },
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    opacity: 0.8,
  },
  text: {},
})

export default Kayit;

/*

request.auth !=

          <TextInput
          placeholderTextColor='grey'
          placeholder='Kullanıcı Adı'
          value={kullaniciAdi}
          onChangeText={text => setKullaniciAdi(text)}
          style={styles.inputs} /> 

          <TextInput
          placeholderTextColor='grey'
          placeholder='Adı Soyadı'
          value={name}
          onChangeText={text => setName(text)}
          style={styles.inputs} />

*/
