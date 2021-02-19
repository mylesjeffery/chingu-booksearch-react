import React, { useState, useEffect } from 'react'
import './Search.css'
import BookCard from './BookCard'

const API_KEY = process.env.REACT_APP_BOOKSEARCH_API_KEY

function Search() {
	const [query, setQuery] = useState('')
	const [books, setBooks] = useState([])
	const [search, setSearch] = useState(true)
	const [isResults, setIsResults] = useState(true)

	const searchBooks = async (e) => {
		e.preventDefault()
		const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`

		try {
			const res = await fetch(url)
			const data = await res.json()

			if (data.totalItems > 0) {
				setBooks(data.items)
				setIsResults(true)
			} else {
				setIsResults(false)
			}
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		if (query.length > 0) {
			setSearch(false)
		} else {
			setSearch(true)
		}
	}, [query])
	return (
		<div>
			<h1>React Bookfinder</h1>
			<form className="form" onSubmit={searchBooks}>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="e.g. Harry Potter"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<button className="button" type="submit" disabled={search}>
					Search
				</button>
			</form>
			<div className="card-list">
				{isResults ? (
					books.map((book) => <BookCard book={book} key={book.id} />)
				) : (
					<p>no results</p>
				)}
			</div>
		</div>
	)
}

export default Search
