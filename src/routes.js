const { addNotehandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNotehandler
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/note/{id}',
        handler: deleteNoteByIdHandler
    }
]

module.exports = routes
