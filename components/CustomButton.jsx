import { Text, TouchableOpacity } from "react-native";
import { classNames } from "@/helpers/ui";

const CustomButton = ({ ...props }) => {
    const { type, onPress, className, title } = props;

    let buttonClasses = classNames([
        "rounded-lg p-2 capitalize", 
        className,
        [type == "delete", "bg-red-500"],
        [type == "edit", "bg-blue-500"],
        [type == "add", "bg-green-500"],
        [type == "setting", "bg-yellow-300"],
        [type == "intro", "bg-blue-800"]
    ]);

    return (
        <TouchableOpacity
            className ={buttonClasses}
            onPress={onPress}
        >
            <Text className ="text-white text-xl font-medium">
                {title ? title : type.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton ;