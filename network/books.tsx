import fs from 'fs'
import path from 'path'

const booksDir = path.join(process.cwd(), 'books')

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(booksDir)
  const booksData = bookFileNames.map((bookFileName) => {
    const bookFullPatch = path.join(booksDir, bookFileName)
    const bookContent = fs.readFileSync(bookFullPatch, 'utf8')
    return {
      bookName: bookFileName.replace(/\.txt$/, ''),
      bookContent,
    }
  })
  return booksData
}
