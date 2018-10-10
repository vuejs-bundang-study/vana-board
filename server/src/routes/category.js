import express from 'express';
import { getCategories, createCategory, deleteCategoryById } from '../services/category';

export const categoryRouter = express.Router();

categoryRouter.get('/', (req, res) => {

    const respond = (result) => {
        console.log(`카테고리 ${result.length} 건 조회`)
        return res.json(result);
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
        });
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
        message: '필수 입력 항목을 모두 입력해주세요.'
      })

    const respond = (result) => {
        console.log(`${result._id} 카테고리가 등록되었습니다.`)

        const { _id, name, createdBy, createdAt, updatedAt } = result;

        return res.json({
            success: true,
            _id, name, createdBy, createdAt, updatedAt,
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

categoryRouter.put('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;
  const { name } = req.body;

  const respond = (result) => {
      console.log(`${_id} 카테고리가 수정되었습니다.`)
      return res.json({
          success: true,
          _id,
      });
  };

  const handleError = (error) => {
      console.log(error);
      return res.status(500).json({
          success: false,
          message: '서비스에 문제가 발생했습니다.',
      });
  };

    deleteCategoryById(_id, { name })
      .then(respond)
      .catch(handleError);
})

categoryRouter.delete('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;

  const respond = (result) => {
    console.log(`${_id} 카테고리가 삭제되었습니다.`)
      return res.json({
          success: true,
          _id,
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
