import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, Image, View, ImageBackground } from 'react-native';
import { EgzersizData } from './EgzersizData';

import RBSheet from "react-native-raw-bottom-sheet";
import FastImage from 'react-native-fast-image';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function Egzersiz({ navigation, route }) {
    const datas = [];

    const [indx, setIndx] = useState(0);
    const [s, setS] = useState(0);

    const refRBSheet = useRef();
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params.seviye == "Baslangic Seviyesi") {
                setS(0);
            }
            else if (route.params.seviye == "Orta Seviye") {
                setS(1);
            }
            else {
                setS(2);
            }
        })
    });

    function selectedItem(index) {
        setIndx(index);
        refRBSheet.current.open();
    }

    for (let i = 0; i < EgzersizData.length; i++) {
        if (EgzersizData[i].seviye == s) {
            datas.push(
                <View key={i} style={{ width: "90%", alignSelf: "center", height: 80 }}>
                    <TouchableOpacity onPressIn={() => selectedItem(i)} style={{ borderRadius: 10, width: "90%", alignSelf: "center", height: 70, backgroundColor: "rgba(0,0,0,0.7)" }}>
                        <View style={{ borderRadius: 10, height: "100%", aspectRatio: 1, flexDirection: "row" }}>

                            <Image source={EgzersizData[i].source} style={{ borderRadius: 10, width: "100%", height: "100%" }} />
                            <Text style={{ color: "#e3e3e3", top: "30%", fontSize: 15, left: "20%", width: "250%"}}>
                                {EgzersizData[i].name}
                            </Text>

                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }
    return (
        <ImageBackground source={require('./Deep.jpg')} style={{ width: w, height: h, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0, 0, 31)" }}>
            <View style={styles.middlePanel}>
                <View style={{ alignSelf: "center", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={styles.text}>{route.params.seviye}</Text>
                    <ScrollView>
                        <View flexDirection="row" flexWrap="wrap" style={{ alignItems: "center", alignSelf: "center", width: "100%", justifyContent: "center" }}>
                            {datas}
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Antreman', { seviye: route.params.seviye })} style={{ justifyContent: "center", alignItems: "center", position: "absolute", borderBottomRightRadius: w * 0.05, borderBottomLeftRadius: w * 0.05, width: "100%", alignSelf: "center", height: h * 0.1, bottom: "0%", backgroundColor: "#FFD523" }} >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        Günlük Egzersizi Başlat
                    </Text>
                </TouchableOpacity>
            </View>
            
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={400}
                openDuration={200}
                closeOnPressMask={true}
                customStyles={{
                    container: {
                        alignItems: "center",
                        borderTopEndRadius: 20,
                        borderTopLeftRadius: 20,
                        backgroundColor: "black"
                    },
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)"
                    },
                    draggableIcon: {
                        backgroundColor: "#e3e3e3",
                        height: "6%",
                    }
                }}
            >

                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <FastImage
                        style={{ borderRadius: 20, height: "50%", aspectRatio: 1 }}
                        source={EgzersizData[indx].source}
                    />
                    <Text style={{ color: "#e3e3e3", fontSize: 16, fontWeight: "bold", top: "5%" }}>
                        Egzersizin Adı: {EgzersizData[indx].name} {"\n"}
                        Suresi: {EgzersizData[indx].sure} {"\n"}
                        Kalori: {EgzersizData[indx].calori} {"\n"}
                        {EgzersizData[indx].aciklama}
                    </Text>
                </View>
            </RBSheet>


        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    seviye: {
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        aspectRatio: 3,
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
    },
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
    },
    text: {
        color: "#cccccc",
        fontSize: 24,
        lineHeight: 55,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
    },
    secimText: {
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default Egzersiz;