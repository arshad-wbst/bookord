import {StyleSheet} from 'react-native';
import {Colors, Values, Spacing, Typography} from '_styles/index';

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  text: {
    fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
    fontSize: Typography.FONT_SIZE_GENERAL,
  },

  text_darkmode: {
    color: Colors.WHITE,
  },

  text_brightmode: {
    color: Colors.BLACK,
  },

  menutext_darkmode: {
    color: Colors.WHITE,
  },

  menutext_brightmode: {
    color: Colors.GRAY_DARK,
  },

  text_blue: {
    color: Colors.PRIMARY,
  },

  scene_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scene_title: {
    flex: 10,
    fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_SCENE_TITLE,
  },

  menu_icon_wrapper: {
    // flex: 1,
    paddingVertical: 0,
    height: 18,
    width: 24,
  },
  inputtext: {
    fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
    color: Colors.INPUT_TEXTCOLOR,
    fontSize: Typography.FONT_SIZE_GENERAL,
    marginBottom: Spacing.FORM_LABEL_BOTTOM_GAP,
  },
  inputcell: {
    flexDirection: 'column',
    marginTop: Spacing.FORM_CELL_GAP,
    // height:Values.INPUT_CELL_HEIGHT
  },
  wrapper_flex_fill: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 6,
    // paddingHorizontal: 10,
    borderRadius: Values.BORDER_RADIUS_10,
    // elevation: 3,
    backgroundColor: Colors.CONFIRM_BTN_BACKGROUND,
    marginTop: Spacing.SCALE_18,
  },
  button_half: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: Values.BORDER_RADIUS_10,
    // elevation: 3,
    backgroundColor: Colors.CONFIRM_BTN_BACKGROUND,
    marginTop: Spacing.SCALE_18,
    width: '40%',
  },
  dd_item_style: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    borderBottomColor: Colors.GRAY_LIGHT,
    alignItems: 'center',
  },
  dd_item_textstyle: {
    marginVertical: 10,
    paddingRight: 50,
    paddingLeft: 0,
    flex: 1,
  },
  dd_item_check_area: {
    paddingHorizontal: 5,
    width: 20,
    justifyContent: 'center',
  },
});
