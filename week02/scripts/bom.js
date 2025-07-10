
document.getElementById('add-chapter').addEventListener('click', addChapter);

function addChapter() {
    const bookChapterInput = document.getElementById('book-chapter');
    const chapterList = document.getElementById('chapter-list');

    if (bookChapterInput.value !== '') {
        const newChapter = document.createElement('li');
        newChapter.textContent = bookChapterInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', removeChapter);

        newChapter.appendChild(removeButton);
        chapterList.appendChild(newChapter);

        bookChapterInput.value = '';
    }
}

function removeChapter(event) {
    const chapterList = document.getElementById('chapter-list');
    chapterList.removeChild(event.target.parentNode);
}



