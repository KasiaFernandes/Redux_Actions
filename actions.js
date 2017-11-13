const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment() {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function thumbUpComment(thumbs) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4(),
        thumbs
    }
}

function thumbDownComment(thumbs) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4(),
        thumbs
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text));
const boundRemoveComment = () => dispatch(removeComment());
const boundThumbUpComment = thumbs => dispatch(thumbUpComment(thumbs));
const boundThumbDownComment = thumbs => dispatch(thumbDownComment(thumbs));
