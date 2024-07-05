import React, { useState } from "react";
import { View } from "react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { addNote } from "@/databases/notes";
import { useRouter } from "expo-router";

const Add = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const router = useRouter();

    const handleAddNote = () => {
        if (title.trim() && note.trim()) {
            addNote({
                title,
                note
            });
            setTitle("");
            setNote("");
            router.replace("/notes");
        }
    };

    return (
        <View className="flex-1 p-4 bg-blue-200">
            <View className="flex-row justify-between items-center">
            <View className="w-2/3">
            <CustomInput
                className="m-2 bg-white"
                title="Title"
                value={title}
                onChangeText={(text: string) => setTitle(text)}
            />
            <CustomInput
                className="m-2 bg-white"
                title="Note"
                value={note}
                onChangeText={(text: string) => setNote(text)}
            />
            </View>
            <CustomButton
                className="m-2"
                type="add"
                onPress={handleAddNote}
                title="Edit Note"
            />
            </View>
        </View>
    );
};

export default Add;
