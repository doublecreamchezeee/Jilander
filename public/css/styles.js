import { StyleSheet } from 'react-native';

  // for testing
  // backgroundColor: 'red',
  // backgroundColor: 'yellow',


const styles = StyleSheet.create({
  // home screen
  container: {
    flex: 100,
    
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },

  // daytime component
  daytimeContainer: {
    flex: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  // infotaskboard component
  infoTaskBoardContainer: {
    flex: 85,
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

  },
  inputContainer: {
    flexDirection: "row",
    margin: 15,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  textInput: {
    margin: 15,
    fontSize: 10
  },
  addButton: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center', 
    height: 40,
    width: 'auto'
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  taskListContainer: {
    height: '80%',
    width: '100%',
    borderRadius: 5,
  },
  taskContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 20,
    width: '90%'

  },
  detailTaskContainer: {
    flexDirection: 'row',
    margin: 10,
    width: '90%',
  },
  // task component
  task: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    margin: 5,
  }
});

export default styles;
