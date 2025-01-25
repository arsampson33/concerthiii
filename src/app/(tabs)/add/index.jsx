import React from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
  } from "react-native";
import ConcertLog from "../../../components/concertLog/concertLog";



export default function Add() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <ConcertLog />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  