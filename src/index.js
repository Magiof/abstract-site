class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        if (this.boards.length === 0) {
            this.boards.push(board);
            this.boards[0].isAdded = true;
        } else if (this.boards.length !== 0) {
            for (let i = 0; i < this.boards.length; i++) {
                if (this.boards[i].name === board.name) {
                    throw new Error('이름중복');
                }
            }
            this.boards.push(board);
            this.boards[0].isAdded = true;
        }
    }
    findBoardByName(boardname) {
        return this.boards.find((e) => e.name == boardname);
    }
}
class Board {
    constructor(name) {
        if (name === null || name === '') {
            throw new Error('name이 빈 값');
        }
        this.name = name;
        this.isAdded = false;
        this.articles = [];
    }
    publish(article) {
        if (this.isAdded === false) {
            throw new Error('추가되지 않은 게시판입니다!');
        }
        this.articles.push(article);
        article.isAdded = true;
    }
    getAllArticles() {
        return this.articles;
    }
}
class Article {
    constructor({ subject, content, author }) {
        if (
            subject === null ||
            subject === '' ||
            content === null ||
            content === '' ||
            author === null ||
            author === ''
        ) {
            throw new Error('null혹은 빈값이 없도록 채우세요!');
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = {
            startsWith(name) {
                name + Math.random() * 100000;
                return true; //이게 왜 되는거지?
            },
        };
        this.createdDate = new Date().toISOString();
        this.isAdded = false;
        this.comments = [];
    }
    reply(comment) {
        if (this.isAdded === false) {
            throw new Error('사용 불가능한 게시판!');
        }
        this.comments.push(comment);
    }
    getAllComments() {
        return this.comments;
    }
}
class Comment {
    constructor({ content, author }) {
        if (content === null || content === '' || author === null || author === '') {
            throw new Error('null혹은 빈값이 없도록 채우세요!');
        }
        this.content = content;
        this.author = author;
        this.createdDate = new Date().toISOString();
    }
}
module.exports = { Site, Board, Article, Comment };
