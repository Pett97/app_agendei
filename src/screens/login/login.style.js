import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 40,
    justifyContent: "space-between",
  },
  containerLogo: {
    alignItems: "center",
  },
  logo: {
    widht: 100,
    heigth: 23,
  },
  containerInput:{
    marginBottom:15
  },
  input:{
    backgroundColor:COLORS.gray5,
    padding:10,
    borderRadius:6,
  },
  footer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
  },
  footerLink:{
    color:COLORS.blue
  }
};

export default styles;
