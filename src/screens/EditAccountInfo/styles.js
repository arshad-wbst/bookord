import { StyleSheet } from 'react-native';
import { Colors, Typography } from '../../styles';
import { scaleSize } from '../../styles/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    // backgroundColor:"cyan",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.INPUT_BORDER_COLOR
  },
  headerTitle: {
    fontSize: scaleSize(15),
    color: Colors.TEXT_COLOR,
    fontWeight: '700',
    lineHeight: 19.6,
    letterSpacing: -0.03 * 15,
  },
  saveText: {
    color: '#777777',
    fontSize: scaleSize(15),
    // color:Colors.TEXT_COLOR,
    fontWeight: '400',
    lineHeight: 19.6,
    letterSpacing: -0.03 * 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 15,
    // backgroundColor:'cyan',
    paddingVertical: 5,
    width: '95%',
    alignSelf: "center"
  },
  inputContainer: {
    // flex: 1,
    // marginRight: 10,
    // backgroundColor:'cyan',
    borderBottomWidth: 1,
    borderBottomColor: Colors.INPUT_BORDER_COLOR,
    paddingVertical: 10,
    width: '48%'
  },
  label: {
    marginBottom: 5,
    fontSize: scaleSize(12),
    color: Colors.TEXT_COLOR,
    fontWeight: '500',
    lineHeight: 19.6,
    letterSpacing: -0.03 * 12,
  },
  label_below: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    //  backgroundColor:"cyan"
  },
  textValue: {
    fontSize: scaleSize(13),
    color: Colors.TEXT_COLOR,
    fontWeight: '500',
    // lineHeight: 19.6,
    letterSpacing: -0.03 * 13,
    fontFamily: Typography.FONT_FAMILY_GENERAL_LIGHT
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.INPUT_BORDER_COLOR,
    paddingBottom: 10,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: "center",
    // backgroundColor:'cyan',
    paddingVertical: 15,
  },
  verifyText: {
    fontSize: scaleSize(12),
    color: Colors.PRIMARY,
    fontWeight: '400',
    // lineHeight: 19.6,
    letterSpacing: -0.03 * 12,
    marginTop: 5,
  },
  editButton: {
    // alignSelf: 'flex-end',
    // marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  editButtonText: {
    fontSize: scaleSize(13),
    color: Colors.ICON_COLOR,
    fontWeight: '500',
    // lineHeight: 19.6,
    letterSpacing: -0.03 * 13,
  },
  changeButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  changeButtonText: {
    fontSize: scaleSize(13),
    color: Colors.ICON_COLOR,
    fontWeight: '500',
    // lineHeight: 19.6,
    letterSpacing: -0.03 * 13,
  },
  textHint: {
    fontSize: 14,
    fontWeight: '300',
  },
  addButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#2C3E50',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
  deleteText: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#777777',
    marginTop: 10,
  },

  // Skeleton Loader Styles
  skeletonHeader: {
    width: 150,
    height: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  skeletonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skeletonBox: {
    width: '45%',
    height: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  skeletonBoxFull: {
    width: '100%',
    height: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  skeletonButton: {
    width: '30%',
    height: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  skeletonText: {
    width: 150,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    // marginBottom: 15,

    // marginTop: 5,
    // paddingVertical: 15,
    // paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1, // ✅ Adds border
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    backgroundColor: "#778899", // ✅ Grey background
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  submitText: {
    color: "#fff", // ✅ White text
    fontSize: 18,
    fontWeight: "bold",
  },
  notNowText: {
    color: "#666",
    marginTop: 10,
    fontSize: 16,
  },

});

export default styles;
