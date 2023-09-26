const getPosts = (req, res) => {
    const posts = [
        { title: "Influencer 1", img: '/img/inf1.jpg' },
        { title: "Influencer 2", img: '/img/inf2.jpg' },
        { title: "Influencer 3", img: '/img/inf3.jpg' },
      ];
      res.render('posts', { title: 'Posts', posts: posts }); // Pass the posts data to the template
}

module.exports = {
    getPosts
}