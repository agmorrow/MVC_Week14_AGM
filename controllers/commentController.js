const { Comment } = require('../models');
module.exports = {
	createComment: async (req, res) => {
		const { text, blog_id } = req.body;
		try {
			const newComment = await Comment.create({
				text,
				user_id: req.session.user_id,
                blog_id
			});
			res.json({ newComment });
		} catch (e) {
			res.json(e);
		}
	},
}