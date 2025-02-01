import {Schema, model} from 'mongoose';

const bookSchema = new Schema({

     /**
     * Official title / name of the book.
     */
     book_title: {
        type: String,
        required: [true, 'The book title is required.'],
        minlength: [5, 'The book title cannot be empty.'],
        trim: true,
    },

    /**
     * The name of the Author of the book.
     */
    book_author: {
        type: String,
        required: [true, 'The name of the author is required.'],
        minlength: [5, 'The author cannot be empty (must at least have initials).'],
        trim: true,
    },

    /**
     * The date of when the book was added to the database.
     */
    book_add_datetime: {
        type: Date,
        default: Date.now,
    }

});

export default model('Book', bookSchema);