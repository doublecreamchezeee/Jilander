import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  daytimeContainer: {
    flex: 15,
    marginTop: 30,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  infoTaskBoardContainer: {
    flex: 85,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 40,
    color: 'grey',
    margin: 15,
    textAlign: 'center',
  },
  timeText: {
    fontSize: 20,
    color: 'grey',
    margin: 15,
    textAlign: 'center',
  },
  infoTaskBoardContainer: {
    height: '80%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
    // backgroundColor: 'red',

  },
  inputContainer: {
    flexDirection: "row",
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center', 
    // backgroundColor: 'yellow',
  },
  textInput: {
    margin: 15,
    fontSize: 10
  },
  addButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center', 
    height: 35
  },
  addButtonText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  taskListContainer: {
    height: '80%',
    width: '100%',
    borderRadius: 5,
  },
});

export default styles;
