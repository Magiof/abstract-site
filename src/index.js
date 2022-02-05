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
    }
    publish() {
        if (this.isAdded === false) {
            throw new Error('추가되지 않은 게시판입니다!');
        }
    }
}
class Article {
    constructor({ subject, content, author }) {
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = { startsWith(name) {
            name + Math.random()*100000;
            return true         //이게 왜 되는거지?
        }}
    }
}
class Comment {}
module.exports = { Site, Board, Article, Comment };

const mySite = new Site();
const noticeBoard = new Board('공지사항');
mySite.addBoard(noticeBoard);

const article = new Article({
    subject: '첫번째 공지사항입니다.',
    content: '테스트 코드는 수정하면 안됩니다.',
    author: '강승현',
});
noticeBoard.publish(article);

console.log(article.id.startsWith('공지사항-'));
