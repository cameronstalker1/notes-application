const yargs = require('yargs')
const notes = require('./notes')

//customers yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    //the type of command
    command: 'add',
    //a brief description
    describe: 'Add a new note',
    // what we want the command to support
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    // the actual code that will be executed 
    handler: function (argv){
       notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
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

//parsing argument with config details 
yargs.parse()
