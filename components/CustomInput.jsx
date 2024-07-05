import { classNames } from "@/helpers/ui";
import { View, Text, TextInput } from "react-native";

const CustomInput = ({ ...props }) => {
    const { type, title, value, onChangeText, className } = props;

    let buttonClasses = classNames([
        "border-2 border-black rounded-lg p-2",
        className
    ]);

    return (
        <View>
            <TextInput
                className ={buttonClasses}
                type={type}
                placeholder={"Please enter your " + title.toLowerCase()}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default CustomInput;