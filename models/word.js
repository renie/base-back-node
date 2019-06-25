import { getWordDatabase } from './model'
import { isValidString } from '../utils/fn'

export const isValidDefinition = definition => isValidString(definition)

export const isValidName = name => isValidString(name)

export const isValidWord = word => (isValidName(word.name) && isValidDefinition(word.definition))

export const saveWord = (word, getWordDatabaseFn = getWordDatabase) =>  {
    if (isValidWord(word)) {
        return getWordDatabaseFn().insert(word)
    } else {
        throw Error('Invalid word object: ', word)
    }
}


export const getWords = (afterFindingFn, getWordDatabaseFn = getWordDatabase) => getWordDatabaseFn().find({}, afterFindingFn)
