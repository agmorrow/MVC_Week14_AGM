const { Comment } = require('../models');
module.exports = {
	createComment: async (req, res) => {
		const { text, blog_id } = req.body;
		try {
			const commentData = await Comment.create({
				text,
				user_id: req.session.user_id,
                blog_id
			});
			res.json({ commentData });
		} catch (e) {
			res.json(e);
		}
	},
}