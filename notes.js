const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)
    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep) 
    } else {
        console.log(chalk.bgRed('Unable to find the note!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.bgGreen("Your Notes..."))

    notes.forEach((note) => {
        console.log(note.title)})

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}