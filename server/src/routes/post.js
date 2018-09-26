import express from 'express';
import { getPostByCategory, createPost, deletePostById, updatePostById } from '../services/post';

export const postRouter = express.Router();

postRouter.get('/:category([a-zA-Z]{1,12})/:page([1-9]{1}[0-9]{0,5})/:perPage(10|30|50)', (req, res) => {

    const { category, page, perPage } = req.params;

    const respond = (result) => {
        if (!result) {
            return res.status(404).json('찾을 수가 없어요.');
        }
        return res.json(result);
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json('failure!');
    };

    getPostByCategory(category, page, perPage)
        .then(respond)
        .catch(handleError);

});

postRouter.post('/', (req, res) => {

    const { post } = req.body;

    const respond = (result) => {
        console.log(result);
        return res.json('ok!');
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json('failure!');
    };

    createPost(post)
        .then(respond)
        .catch(handleError);

});

postRouter.delete('/:id([0-9a-fA-F]{24})', (req, res) => {

  const { id } = req.params;

  const respond = (result) => {
      console.log(result);
      return res.json('ok!');
  };

  const handleError = (error) => {
      console.log(error);
      return res.status(500).json('failure!');
  };

  deletePostById(id)
      .then(respond)
      .catch(handleError);
})

postRouter.put('/:id([0-9a-fA-F]{24})', (req, res) => {

    const { id } = req.params;
    const { post } = req.body;

    const respond = (result) => {
        console.log(result);
        return res.json('ok!');
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json('failure!');
    };

    updatePostById(id, post)
        .then(respond)
        .catch(handleError);
})
