const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'comment',
      'user_id'

    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id'],
        include: [
          {
            model: User,
            attributes: ['username']
          },
          {
            model: Post,
            attributes: ['title', 'comment']
          }
        ]
      },

    ]

  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'comment',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id'],
        include: [
          {
            model: User,
            attributes: ['username']
          },
          {
            model: Post,
            attributes: ['title', 'comment']
          }
        ]
      },

    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    comment: req.body.comment,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
      comment: req.body.comment

    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Post found with id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;