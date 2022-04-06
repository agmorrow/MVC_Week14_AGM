const {
  Post,
  User,
  Comment
} = require('../models');
const auth = require('../utils/auth');
const router = require('express').Router();

router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
        'id',
        'title',
        'comment',
        'created_at',
        'user_id'
      ],
      include: [{
        model: User,
        attributes: ['username']
      }]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({
        plain: true
      }));
      res.render('home', {
        posts
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// Get's login data
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/signup.handlebars', {});
});
// Gets data for the dashboard
router.get('/dashboard', auth, (req, res) => {

  Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
      ]
    })
    .then(dbPostData => {
      const title = dbPostData.map(post => post.get({
        plain: true
      }));
      res.render('dashboard', {
        title
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// Pulling updated post data
router.get('/dashboard/post-update/:id', auth, (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['title', 'comment']
    })
    .then(dbPostData => {
      const upPost = dbPostData.get({
        plain: true
      });
      res.render('updatePost', {
        upPost
      });
    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

router.get('/dashboard/create', auth, (req, res) => {
  res.render('addPost')
});

// Finds posts by id
router.get('/post/:id', auth, (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'comment',
        'created_at'
      ],
      include: [{
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['comment_text', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({
          message: 'No Post Found!'
        });
        return;
      }
      const info = dbPostData.get({
        plain: true
      });
      res.render('singlePost', {
        info,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

});

module.exports = router;