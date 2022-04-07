import React, {useState , useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { Button, Modal, FormControl, Input, Alert, Pressable, HStack, List  } from "native-base";
import axios from "axios";
import {
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




export default function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = "http://localhost:5000/api/v1/";
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();


  const handleAddTask = async () => {
    try {
      if (!title || !description) {
        return <Alert>You need to fill the field</Alert>;
      }

      const data = {
        title,
        description,
      };

      const response = await axios.post(`http://localhost:5000/api/v1/todo`, data);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  }

  const onPressButton = () => {
    handleAddTask();
    setShowModal(false);
    getTodo();
  };

  const getTodo = () => {
    setIsLoading(true);
    axios
      .get(`${url}todos`)
      .then((res) => {
        setTodo(res.data.data.todos);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Fetch Data");
       console.log(res.data.data)
       setIsLoading(false);
      });
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${url}/todo/${id}`);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const doneTodo = async (id) => {
    try {
      let done = {
        status: "Done",
      };

      const response = await axios.patch(`${url}todo/${id}`, done);
      setIsLoading(true);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo()
  }, [])

    const _renderItem = ({ item }) => {
      return (
        <List
          key={item.id.toString()}
          my={2}
          spacing={2}
          bg= "#fff"
          borderRadius={10}
         
        >
          <List.Item >
            <HStack direction="row" space={10}>
            {item.status === "Done" ? (
              <HStack align="rigth">
              <FontAwesome
                name="check-square-o"
                size={24}
                color="green"
              />
              <Feather   onPress={() => deleteTodo(item.id)} name="delete" size={24} color="red" />
            </HStack>
            ) : (
              <HStack>
                 <HStack >
                  <TouchableOpacity style={styles.circular}  onPress={() => doneTodo(item.id)}></TouchableOpacity>
                  <Feather   onPress={() => deleteTodo(item.id)} name="delete" size={24} color="red" />
                </HStack>
              </HStack>
              
            )}
            <Pressable onPress={() => navigation.navigate("Detail", item)}>
              <Text style={styles.itemText}>{item.title}</Text>
            </Pressable>
            
          </HStack>
          </List.Item>
        </List>
      );
    };


  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>
        <View style={styles.items}>
        
        <FlatList
        data={todo}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={getTodo}
      
       />
          
        </View>
      </View>
        
      </ScrollView>

     
      <KeyboardAvoidingView 
       
        style={styles.writeTaskWrapper}
      >
        
        <TouchableOpacity  onPress={() => setShowModal(true)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Add Todo</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Title</FormControl.Label>
              <Input
                placeholder="Input your Title"
                
                autoFocus={true}
                onChangeText={(nextValue) => setTitle(nextValue)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Description</FormControl.Label>
              <Input
                placeholder="Input your Description"
                // value={description}
                autoFocus={true}
                onChangeText={(descValue) => setDescription(descValue)}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                color="white"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={ () => onPressButton()} >Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </KeyboardAvoidingView>
      
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  itemText: {
    // maxWidth: '80%',
    fontWeight:600,
    fontSize: 20
  },
  circular: {
    width: 24,
    height: 24,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize:30,
    fontWeight:"bold"
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});