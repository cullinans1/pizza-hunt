const router = require('express').Router();

const { removeComment, addComment, addReply, removeReply, } = require('../../controllers/comment-controller');


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);
module.exports = router;