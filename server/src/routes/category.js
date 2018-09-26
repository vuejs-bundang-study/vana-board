import express from 'express';
import { getCategories, createCategory, deleteCategoryById } from '../services/category';

export const categoryRouter = express.Router();

categoryRouter.get('/', (req, res) => {

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

    getCategories()
        .then(respond)
        .catch(handleError);

});

categoryRouter.post('/', (req, res) => {

    const { category } = req.body;

    const respond = (result) => {
        console.log(result);
        return res.json('ok!');
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json('failure!');
    };

    createCategory(category)
        .then(respond)
        .catch(handleError);

});

categoryRouter.delete('/:id([0-9a-fA-F]{24})', (req, res) => {

  const { id } = req.params;

  const respond = (result) => {
      console.log(result);
      return res.json('ok!');
  };

  const handleError = (error) => {
      console.log(error);
      return res.status(500).json('failure!');
  };

  deleteCategoryById(id)
      .then(respond)
      .catch(handleError);
})
