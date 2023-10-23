import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 12,
    marginTop: 12,
    paddingTop: 5,
    borderTopColor: '#0002',
    borderTopWidth: 1
  },
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  userInfo: {
    flexDirection: 'row',
    gap: 10
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  postBodyImage: {
    width: '100%',
    height: 320
  },
  postFooterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  postFooterMainActions: {
    flexDirection: 'row',
    gap: 10
  }
})