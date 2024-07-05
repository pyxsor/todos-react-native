let notes = [
    { id: 1, title: "Active Note", note: "This is the first note", status: "active" },
    { id: 2, title: "Inactive Note", note: "This is the first note", status: "inactive" }
];

const getNotes = () => notes;

const getNote = (id) => notes.find((note) => note.id === Number(id));

const editNote = (id, { title, note }) => {
    notes = notes.map((n) => {
        if (n.id === Number(id)) {
            return { ...n, title, note };
        }
        return n;
    });
};

const deleteNote = (id) => {
    notes = notes.filter((note) => note.id !== Number(id));
};

const toggleNoteStatus = (id) => {
    notes = notes.map((n) => {
        if (n.id === Number(id)) {
            const newStatus = n.status === "active" ? "inactive" : "active";
            return { ...n, status: newStatus };
        }
        return n;
    });
};

const addNote = ({ title, note }) => {
    const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    notes = [...notes, { id, title, note, status: "active" }];
};

export {
    getNotes,
    getNote,
    editNote,
    deleteNote,
    addNote,
    toggleNoteStatus
};
