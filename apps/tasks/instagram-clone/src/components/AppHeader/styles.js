import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 16
  },
  icons: {
    flexDirection: 'row',
    gap: 24
  },
  logo: {
    fontSize: 24,
    fontStyle: 'italic'
  }
})