import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 14,
  },
  item:{
    borderWidth:1,
    borderColor:COLORS.gray4,
    paddingLeft:8,
    paddingTop:15,
    paddingBotton:15,

  },
  title:{
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray1,
    marginBotton:15,
  },
  text:{
    fontSize:FONT_SIZE.md,
    color:COLORS.gray1,
    marginLeft:8
  }
};

export default styles;
