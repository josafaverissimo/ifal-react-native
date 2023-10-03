import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
                <View style={styles.box4}></View>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
                <View style={styles.box4}></View>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
                <View style={styles.box4}></View>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        height: 250,
        backgroundColor: "red"
    },
    box2: {
        height: 250,
        backgroundColor: "yellow"
    },
    box3: {
        height: 250,
        backgroundColor: "pink"
    },
    box4: {
        height: 250,
        backgroundColor: "blue"
    }
})