import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView, Image, View, ImageBackground } from 'react-native';

import { EgzersizData } from './EgzersizData';
import FastImage from 'react-native-fast-image';

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

global.sure = 0;

function Antreman({ navigation, route }) {
    let i = 0;
    var first = 0;
    var index = 0;
    var sure = 0;
    var sr = 0;
    var dk = 0;
    var sn = 0;

    const [img, setImg] = useState(null);
    const [time, setTime] = useState(0);
    const [txt, setTxt] = useState(index)
    const [indx, setIndx] = useState(i);
    const [egzersiz, setEgzersiz] = useState(EgzersizData[indx]);

    function change() {
        if (i != first + 4 ) {
            i++;
            setEgzersiz(EgzersizData[i]);
            setImg(EgzersizData[i].source);

            sr = EgzersizData[i].sure;
            dk = Math.floor(sr / 60);
            sn = sr % 60;
            countDown2(dk, sn, i);
        }
        else {
            setImg(require('./finish.png'));
            setTime("-- : --");
        }
    }

    function nextMove() {  
        setImg(EgzersizData[i + 1].source);
        countDown(5);
    }

    function countDown(sure) {  
        if (sure != -1) {
            setTime("Diğer harekete geçmek için son: " + sure + " saniye");  
            setTimeout(() => countDown(sure - 1), 1000);  
        }
        else {
            change(); 
        }
    }

    function countDown2(dk, sn, idxx) {
        var ind = idxx;
        var tm = "";
        tm = dk + ":" + sn;
        if (dk < 10) {
            tm = "0" + dk + ":" + sn;
        }
        if (sn < 10) {
            tm = dk + ":" + "0" + sn;
        }
        if (sn < 10 && dk < 10) {
            tm = "0" + dk + ":" + "0" + sn;
        }
        setTime(tm);
        if (sn != -1) {
            setTimeout(() => countDown2(dk, sn - 1, ind), 1000);
        }
        else if (sn == -1 && dk != 0) {
            countDown2(dk - 1, 59, ind);
        }
        else {
            if (ind != 4) {
                nextMove();
            }
            else {
                change();
            }
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params.seviye == "Baslangic Seviyesi") {
                i = 0;
            }
            else if (route.params.seviye == "Orta Seviye") {
                i = 6;
            }
            else {
                i = 12;
            }
            first = i;
            setEgzersiz(EgzersizData[i]);
            setImg(EgzersizData[i].source);

            sr = EgzersizData[i].sure;

            dk = Math.floor(sr / 60);
            sn = sr % 60;
            var tm = "";

            if (dk < 10) {
                tm = "0" + dk + ":" + sn;
            }
            else {
                tm = dk + ":" + sn;
            }

            setTime(tm);
            countDown2(dk, sn, i);
        });
    })

    function newUntil() {
        return egzersiz.sure;
    }
    
    return (
        <ImageBackground source={require('./Midnight.jpg')} style={{ width: w, height: h, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0, 0, 31)" }}>
            <View style={styles.middlePanel}>
                <View style={styles.imageFrame}>
                    <FastImage
                        style={styles.move}
                        source={img}
                    />
                </View>
                <View style={{ width: "100%", height: "10%",  top: "23%", justifyContent: "center", alignItems: "center",   backgroundColor: "#FFD523"}}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                        {time}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
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
    linearGradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    CountDown: {
        borderRadius: 50,
    },
    imageFrame: {
        top: "10%",
        width: "80%",
        aspectRatio: 1,
    },
    move: {
        width: "100%",
        height: "100%",

    },
    seviye: {
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        aspectRatio: 3,
        backgroundColor: "red",
    },
    container: {
        flex: 1,
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
        color: "white",
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    secimText: {
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default Antreman;
/* 
                        <CountDown style={styles.CountDown}
                            size={27}
                            until={times}
                            //onFinish={() => nextMove()}
                            digitStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
                            digitTxtStyle={{ color: '#1CC625' }}
                            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                            separatorStyle={{ color: '#1CC625' }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: null, s: null }}
                            showSeparator
                        />

                            /*
    160,
    160/60 = 2
    160%60 = 40;
    2:40;
    countDown(saniye)
    if(saniye!=0){
        saniye--;
    }
    else if(saniye==0&&dk!=0){
        setDk(dk-1);
        setSaniye(60);
        countDown(saniye);
    }
    else{
        change();
    }
    */