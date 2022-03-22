import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function Home({ navigation, route }) {

  function goEgzersiz(secim) {
    //console.log(secim);
    navigation.navigate('Egzersiz', { seviye: secim })
  }

  return (
    <ImageBackground source={require('./Deep.jpg')} style={styles.container} style={{ width: w, height: h, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.middlePanel}>
        <Text style={styles.text}>Seviye Seçimi Yapınız</Text>
        <View style={{ height: "70%", justifyContent: "space-around" }}>
          <TouchableOpacity style={{ ...styles.seviye, backgroundColor: "rgba(0, 130, 100,0.9)" }} onPressIn={() => goEgzersiz("Baslangic Seviyesi")}>
            <Text style={styles.secimText}>Başlangıç Seviyesi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.seviye, backgroundColor: "rgba(101, 65, 148,0.9)" }} onPressIn={() => goEgzersiz("Orta Seviye")}>
            <Text style={styles.secimText}>Orta Seviye</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.seviye, backgroundColor: "rgba(125, 0, 0,0.9)" }} onPressIn={() => goEgzersiz("İleri Seviye")}>
            <Text style={styles.secimText}>İleri Seviye</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  seviye: {
    borderRadius: w * 0.05,
    justifyContent: "center",
    alignItems: "center",
    width: w * 0.7,
    height: h * 0.14,
    backgroundColor: "red",
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
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 25,
    height: "10%",
    textAlignVertical: "center",
    fontWeight: "bold",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  secimText: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default Home;