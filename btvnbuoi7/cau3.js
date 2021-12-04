// const post = {
//     title: "ahihi",
//     body: "anh Hoàng đzzz",
//     author: "abc",
//     views: 100,
//     comments: [
//       {author: 'anh Huân đzzz', body: "lewlew"},
//       {author: 'anh Huân đzzz', body: "lewlew"},
//     ],
//     isLive: true
//}

function Post(title, body, author, views, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

const comment= [
    {author: 'anh Huân đzzz', body: "lewlew"},
    {author: 'anh Huân đzzz', body: "lewlew"},
];

const post1 = new Post("ahihi", "anh Hoàng đzzz", "abc", 100, comment, true);

console.log(post1);
 


