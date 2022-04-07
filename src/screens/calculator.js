import React, { useState } from "react";
import { Box, Text , View } from "native-base";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

export default function Calculator() {
  const [result, setResult] = useState();
  const [display, setDisplay] = useState(0);


  const onResult = () => {
    setDisplay(eval(display));
  };

  

  const addDisplay= (number)=>{
      if(display == 0){
      setDisplay(number)
      }else{
        setDisplay(display + "" + number)
      }
  }

  

  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "black",
    }}
    >
  
      <Box mt={5} mx={5} flex={1}>
        <Text color="white" fontWeight="bold" fontSize={30}>
          Display
        </Text>
        <Box bg="primary.50" borderRadius={5} height={170} mb={5}>
          <Text
            fontSize={45}
            mx={3}
            my={2}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            {display}
          </Text>
      </Box>
      <Box style={{flex:1 }}>
        <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={()=> setDisplay(0)} style={{flex:1, justifyContent: "center"}}>
                <Text bg="primary.800" fontWeight="bold" fontSize={24} style={{color:"white", padding:10, margin:3, textAlign:"right"}}>
                  Clear</Text>
              </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", textAlign:"center"}}>
              <TouchableOpacity style={{flex:1, justifyContent: "center"}} onPress={()=> addDisplay(1)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(2)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay("-")}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  -</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay("+")}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  +</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", textAlign:"center"}}>
              <TouchableOpacity style={{flex:1, justifyContent: "center"}} onPress={()=> addDisplay(3)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(4)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay("/")}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  /</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay("*")}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  *</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", textAlign:"center"}}>
              <TouchableOpacity style={{flex:1, justifyContent: "center"}} onPress={()=> addDisplay(5)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(6)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay("%")}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  %</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> onResult()}>
                <Text bg="primary.700" fontWeight="bold" fontSize={24}  style={{color:"white", padding:10, margin:3}}>
                  =</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", textAlign:"center"}}>
              <TouchableOpacity style={{flex:1, justifyContent: "center"}} onPress={()=> addDisplay(7)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(8)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24} style={{ padding:10, margin:3}}>
                  8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(9)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24}  style={{ padding:10, margin:3}}>
                  9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, justifyCtent: "center"}} onPress={()=> addDisplay(0)}>
                <Text bg="primary.400" fontWeight="bold" fontSize={24}  style={{ padding:10, margin:3}}>
                  0</Text>
              </TouchableOpacity>
            </View>
      </Box>
        
      </Box>
      </SafeAreaView>
  );
}