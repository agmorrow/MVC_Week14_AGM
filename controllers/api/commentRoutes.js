const router = require('express').Router();
const {
  Post,
  User,
  Comment
} = require('../../models');

// Gets all comments that are saved in database
router.get('/', (req, res) => {
  Comment.findAll({
      attributes: [
        'id',
        'comment_text',
        'user_id',
        'post_id'
      ],
      include: [{
        model: User,
        attributes: ['username'],

      }, {
        model: Post,
        attributes: ['id',
          'title',
          'comment'
        ]
      }]
    })
    .then(dbComData => res.json(dbComData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// Finds comments by id
router.get('/:id', (req, res) => {
  Comment.findOne({
      where: {
        id: req.params.id
      },

      attributes: [
        'id',
        'comment_text',
        'user_id',
        'post_id'
      ],
      include: [{
        model: User,
        attributes: ['username'],

      }, {
        model: Post,
        attributes: ['id',
          'title',
          'comment'
        ]
      }]
    })
    .then(dbComData => {
      if (!dbComData) {
        res.status(404).json({
          message: 'No Comment Found'
        });
        return
      }
      res.json(dbComData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// Allows user to create a comment on a post
router.post('/', (req, res) => {
  if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
      })
      .then(dbComData => res.json(dbComData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
// allows user to delete a comment by id
router.delete('/:id', (req, res) => {
  Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbComData => {
      if (!dbComData) {
        res.status(404).json({
          message: 'No comment found with this id!'
        });
        return;
      }
      res.json(dbComData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;