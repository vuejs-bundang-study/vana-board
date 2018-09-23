import express from 'express';
import { createSample, getSample } from '../services/sample';

export const sampleRouter = express.Router();

sampleRouter.get('/:id([0-9a-fA-F]{24})', (req, res) => {

    const { id } = req.params;

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

    getSample(id)
        .then(respond)
        .catch(handleError);

});

sampleRouter.post('/', (req, res) => {

    const respond = (result) => {
        console.log(result);
        return res.json('ok!');
    };

    const handleError = (error) => {
        console.log(error);
        return res.status(500).json('failure!');
    };

    createSample({
        title: 'Hello',
        content: 'World!',
    })
        .then(respond)
        .catch(handleError);

});
