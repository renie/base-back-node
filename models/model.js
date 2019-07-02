import Datastore from 'nedb'

export const getWordDatabase = () => (new Datastore({filename:'db/word.db', autoload: true}))
