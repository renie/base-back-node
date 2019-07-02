import { saveNewWord, listAll } from '../controllers/word'

export const wordRoutes = [{
        method: 'post',
        url: '/word',
        fn: saveNewWord
    },
    {
        method: 'get',
        url: '/word',
        fn: listAll
    }]
