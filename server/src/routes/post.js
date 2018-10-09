import express from 'express';
import { getPostByCategory, createPost, deletePostById, updatePostById } from '../services/post';

export const postRouter = express.Router();

postRouter.get('/:category([0-9a-fA-F]{24})', (req, res) => {

    const { category } = req.params;
    const { page, perPage } = req.query;

    if ((!page || !perPage) || (isNaN(page) || isNaN(perPage))) {
      return res.status(409).json({
        success: false,
        message: 'page와 perPage를 올바르게 입력해주세요.'
      })
    }

    const respond = (result) => {
        console.log(`카테고리 ${category} 의 게시글 ${result.length} 건 조회`)
        return res.json(result);
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    getPostByCategory(category, page, perPage)
        .then(respond)
        .catch(handleError);

});

postRouter.post('/', (req, res) => {

    const { category, title, content, createdBy } = req.body;

    if (!category || !title || !content || !createdBy)
      return res.status(409).json({
        success: false,
        message: '필수 입력 항목을 모두 입력해주세요.'
      })

    const respond = (result) => {
        console.log(`${result._id} 게시글이 등록되었습니다.`)
        return res.json({
          success: true,
          category, title, content, createdBy
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    createPost({ category, title, content, createdBy })
        .then(respond)
        .catch(handleError);

});

postRouter.put('/:_id([0-9a-fA-F]{24})', (req, res) => {

    const { _id } = req.params;
    const { category, title, content, createdBy } = req.body;

    const respond = (result) => {
        console.log(`${_id} 게시글이 수정되었습니다.`);
        return res.json({
          success: true,
          category, title, content, createdBy
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    updatePostById(_id, { category, title, content, createdBy })
        .then(respond)
        .catch(handleError);
})

postRouter.delete('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;

  const respond = (result) => {
    console.log(`${_id} 게시글이 삭제되었습니다.`);
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

  deletePostById(_id)
    .then(respond)
    .catch(handleError);
})
