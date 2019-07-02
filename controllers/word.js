import { saveWord, getWords } from '../models/word'

export const saveNewWord = (req, res) => {
    try{
        saveWord(req.body)
        res.status(201).send('Word created!')
    } catch(e) {
        res.status(500).send(e.msg)
    }
}


export const listAll = (_, res) => {
    getWords((_, words) => res.status(200).send(words))
}
