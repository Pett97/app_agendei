import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  doctor: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 8,
    flexDirection: "row",
    borderWidth:1,
    borderColor:COLORS.gray2,
    marginTop:3,
    marginButton:3,
    borderRadius:6
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginTop:3
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray2,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
};

export default styles;
