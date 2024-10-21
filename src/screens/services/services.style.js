import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 12,
  },
  banner:{
    height: '40%',
    backgroundColor:COLORS.blue,
    justifyContent: "center",
    alignItems:"center",
  },
  doctorProps:{
  },
  doctorName:{
    color:COLORS.white,
    fontSize:FONT_SIZE.md,
    fontWeight:"bold"
  },
  doctorSpeciality:{
    color:COLORS.white,
    fontSize:FONT_SIZE.sm
  }
};

export default styles;
