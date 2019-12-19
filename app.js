const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//customers yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    //the type of command
    command: 'add',
    //a brief description
    describe: 'Add a new note',
    // the actual code that will be executed 
    handler: function (){
        console.log('Adding a new note...')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    command: 'Remove a note',
    handler: function (){
        console.log('Removing the note...')
    }
})

//read
yargs.command({
    command: 'read',
    command: 'Reading a note',
    handler: function (){
        console.log('Reading the note...')
    }
})

//list
yargs.command({
    command: 'List',
    command: 'Listing a note',
    handler: function (){
        console.log('Listing the note...')
    }
})



console.log(yargs.argv)
