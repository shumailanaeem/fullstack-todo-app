import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  input: ViewStyle;
  taskContainer: ViewStyle;
  deleteButton: ViewStyle;
  toggleButton: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  toggleButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
}); 