import { COLORS, FONT_SIZE } from "../../constants/theme";
const styles = {
  container:{
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between", //espaço entre os itens 
    alignItems: "center",
  },
  detail:{
    marginLeft:5
  },
  description:{
    color:COLORS.gray3
  },
  price:{
    color:COLORS.blue
  }
};

export default styles;
