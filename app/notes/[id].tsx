import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { getNote, editNote } from "@/databases/notes";
import { useRouter, useLocalSearchParams } from "expo-router";

const Edit = () => {
    const { id } = useLocalSearchParams();
    const [note, setNote] = useState("");
    const [title, setTitle] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (id) {
            const existingNote = getNote(Number(id));
            if (existingNote) {
                setNote(existingNote.note);
                setTitle(existingNote.title);
            }
        }
    }, [id]);

    const handleEditNote = () => {
        if (note.trim() && title.trim()) {
            editNote(Number(id), { title, note });
            router.replace("/notes");
        }
    };

    return (
        <View className="flex-1 p-4 bg-blue-200">
            <View className="flex-row justify-between items-center border-solid">
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
                type="edit"
                onPress={handleEditNote}
                title="Edit Note"
            />
            </View>

            <View className="border-solid rounded-lg mt-4 ml-4 bg-white  h-1/2 align-center">
                <Text className="ml-3 text-lg font-semibold">
                    {note}
                </Text>
            </View>
        </View>
    );
};

export default Edit;
