import {StyleSheet} from 'react-native';
import {
  Colors,
  Values,
  // Spacing, Typography
} from '_styles/index';

export default StyleSheet.create({
  mainback: {
    flex: 1,
    backgroundColor: Colors.BACK_COLOR,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modal_header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: Colors.BACK_COLOR,
  },

  modal: {
    backgroundColor: Colors.WND_COLOR,
    borderRadius: Values.BORDER_RADIUS_5,
    // flex : 1,
    paddingHorizontal: Values.MODAL_PADDING_HORZ,
    paddingBottom: Values.MODAL_PADDING_VERT,
    paddingVertical: Values.MODAL_PADDING_HORZ,
  },

  modal_body: {
    paddingHorizontal: Values.MODAL_PADDING_HORZ,
    backgroundColor: Colors.WND_COLOR,
  },

  button_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Values.MODAL_PADDING_VERT,
    marginTop: 10,
  },

  cancel_button: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY_DARK,
    borderWidth: 1,
    marginRight: 5,
  },
  ok_button: {
    marginLeft: 5,
  },
  modal_button: {
    borderRadius: Values.BORDER_RADIUS_10,
    paddingVertical: 7,
    flex: 1,
  },
});
