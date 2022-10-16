import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#d1d1d1",
    },
    containerButton:{
        marginTop: height * 0.014,
        marginLeft: width * 0.02,
    },
    button:{
        backgroundColor: Colors.stack3,
        height: height * 0.04,
        width: width * 0.4,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textBoton:{
        fontSize: 16,
    },
})