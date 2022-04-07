import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Detail(props) {
  const title = props.route.params.title;
  const description = props.route.params.description;
  

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        
          <View style={styles.detailContainer}>
            <Text h1 style={styles.itemText}>
              {title}
            </Text>
            <Text h2 >
              {description}
            </Text>
        </View>
      </View>
        
      </ScrollView>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  detailContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
  itemText: {
    fontWeight:600,
    fontSize: 20,
    marginBottom:30
  },
  
});