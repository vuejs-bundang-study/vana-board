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

    const { name, createdBy } = req.body;

    if(!name || !createdBy)
      return res.status(409).json({
        success: false,
        message: '필수 입력 필드를 모두 채워주세요.'
      })


    const respond = (result) => {
        const { _id, name, createdBy, createdAt, updatedAt } = result
        return res.json({
          success: true,
          _id, name, createdBy, createdAt, updatedAt
        });
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
    };

    createCategory({ name, createdBy })
        .then(respond)
        .catch(handleError);

});

categoryRouter.delete('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;

  const respond = (result) => {
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

  deleteCategoryById(_id)
      .then(respond)
      .catch(handleError);
})
