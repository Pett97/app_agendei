import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  appointment: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 12,
    borderWidth:1,
    borderRadius:6,
    borderColor:COLORS.gray4
  },
  name:{
    fontSize:FONT_SIZE.md,
    color:COLORS.gray1,
    marginButton:3,
  },
  specialty:{
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3,
    marginButton:4,
  },
  container:{
    flexDirection:"row"
  },
  containerBooking:{
    flex:1
  },
  containerButton:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  booking:{
    flexDirection:"row"
  },
  icon:{
    width:25,
    height:25,
    marginRight:5
  },
  bookingDate:{
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3,
    marginTop:3,
  },
  bookingHour:{
    marginTop:3,
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3
  }
};

export default styles;
