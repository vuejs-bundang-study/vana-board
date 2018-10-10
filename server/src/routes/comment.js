import express from 'express';
import { getAllComments, getCommentsOnPost, createComment, updateComment, deleteComment} from '../services/comment';

export const commentRouter = express.Router();

commentRouter.get('/', (req, res) => {

  const respond = (result) => {
      console.log(`댓글 ${result.length} 건 조회`)
      return res.json(result);
  };

  const handleError = (error) => {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: '서비스에 문제가 발생했습니다.',
      });
  };

  getAllComments()
      .then(respond)
      .catch(handleError);

});

commentRouter.get('/:post([0-9a-fA-F]{24})', (req, res) => {

    const { post } = req.params;

    const respond = (result) => {
        console.log(`게시글 ${post} 의 댓글 ${result.length} 건 조회`)
        return res.json(result);
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    getCommentsOnPost(post)
        .then(respond)
        .catch(handleError);

});

commentRouter.post('/', (req, res) => {

    const { createdBy, content, parent, post } = req.body;

    const respond = (result) => {
        console.log(`게시글 ${post}의 댓글이 등록되었습니다.`)
        return res.json({
          success: true,
          createdBy, content, parent, post
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    createComment({ createdBy, content, parent, post })
        .then(respond)
        .catch(handleError);

});

commentRouter.put('/:_id([0-9a-fA-F]{24})', (req, res) => {

    const { _id } = req.params;
    const { content } = req.body;

    const respond = (result) => {
        console.log(`${_id} 댓글이 수정되었습니다.`)
        return res.json({
          success: true,
          _id, content
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    updateComment(_id, { content })
        .then(respond)
        .catch(handleError);

});

commentRouter.delete('/:_id([0-9a-fA-F]{24})', (req, res) => {

    const { _id } = req.params;

    const respond = (result) => {
        console.log(`${_id} 댓글이 삭제되었습니다.`)
        return res.json({
          success: true,
          _id
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    deleteComment(_id)
        .then(respond)
        .catch(handleError);

});
