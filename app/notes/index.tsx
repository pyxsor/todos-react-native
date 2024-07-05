import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import CustomButton from "@/components/CustomButton";
import { getNotes, deleteNote, toggleNoteStatus } from "@/databases/notes";
import { useRouter } from "expo-router";

const Index = () => {
    const [notes, setNotes] = useState(getNotes());
    const router = useRouter();

    useEffect(() => {
        setNotes(getNotes());
    }, []);

    const handleAddNote = () => {
        router.push("/notes/add");
    };

    const handleEditNote = (id: number) => {
        router.push(`/notes/${id}`);
    };

    const handleDeleteNote = (id: number) => {
        deleteNote(id);
        setNotes(getNotes());
    };

    const handleToggleStatus = (id: number) => {
        toggleNoteStatus(id);
        setNotes(getNotes());
    };

    const activeNotes = notes.filter(note => note.status === "active");
    const inactiveNotes = notes.filter(note => note.status === "inactive");

    return (
        <View className="flex-1 p-4 bg-blue-200">
            <View className="flex-row gap-6 justify-center ">
           <View>
           <LottieView
                source={require("@/assets/animations/files.json")}
                autoPlay
                loop
                style={{ width: 150, height: 100 }}
            />
           </View>
            <CustomButton
                className="justify-center align-center items-center "
                type="add"
                onPress={handleAddNote}
                title="Add Note"
            />
            </View>
            <ScrollView>
                <View>
                    {activeNotes.length > 0 ? (
                        activeNotes.map((note) => (
                            <View key={note.id} className="border rounded-lg flex-row justify-between p-2 m-2">
                                <View className="flex-row align-center items-center justify-center ml-3">
                                    <LottieView
                                        source={require("@/assets/animations/notes-icon.json")}
                                        autoPlay
                                        loop
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <Text 
                                        onPress={() => handleEditNote(note.id)}
                                        className="text-2xl font-bold capitalize"
                                    >
                                        {note.title}
                                    </Text>
                                </View>
                                <View className="flex-col mr-2 items-center">
                                    
                                    <CustomButton
                                        type="delete"
                                        onPress={() => handleDeleteNote(note.id)}
                                        title="Delete"                                        
                                        className ="mb-2"
                                    />
                                    <CustomButton
                                        type="setting"
                                        onPress={() => handleToggleStatus(note.id)}
                                        title="Set Inactive"
                                    />
                                </View>
                            </View>
                        ))
                    ) : (
                        <View className="flex justify-center items-center w-full h-64">
                            <LottieView
                                source={require("@/assets/animations/empty.json")}
                                autoPlay
                                loop
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    )}
                </View>
                <View className="border-t border-blue-700 my-4"></View>
                <View className="flex flex-wrap">
                    {inactiveNotes.length > 0 ? (
                        inactiveNotes.map((note) => (
                            <View key={note.id} className="border rounded-lg flex-row justify-between p-2 m-2 bg-blue-600">
                                <View className="justify-center ml-3">
                                    <Text 
                                        onPress={() => handleEditNote(note.id)}
                                        className="text-lg font-bold capitalize"
                                    >
                                        {note.title}
                                    </Text>
                                </View>
                                <View className="flex-col mr-2 items-center">
                                    
                                    <CustomButton
                                        type="delete"
                                        onPress={() => handleDeleteNote(note.id)}
                                        title="Delete"                                        
                                        className ="mb-2"
                                    />
                                    <CustomButton
                                        type="setting"
                                        onPress={() => handleToggleStatus(note.id)}
                                        title="Set Active"
                                    />
                                </View>
                            </View>
                        ))
                    ) : (
                        <View className="flex justify-center items-center w-full h-64">
                            <LottieView
                                source={require("@/assets/animations/empty.json")}
                                autoPlay
                                loop
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;
