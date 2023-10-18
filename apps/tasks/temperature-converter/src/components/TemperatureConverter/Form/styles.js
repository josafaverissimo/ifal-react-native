import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  label: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 3,
    borderColor: '#555',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20
  },
  slider: {
    height: 40
  },
  sliderRangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderRange: {
    fontSize: 20,
    textAlign: 'center'
  },
  sliderRangeActionButton: {
    borderWidth: 3,
    borderColor: '#E0231977',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 8
  },
  sliderRangeAction: {
    fontSize: 25
  },
  picker: {
    backgroundColor: '#941710',
    color: '#fff',
    marginVertical: 20
  },
  temperatureConverted: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})