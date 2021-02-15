import React, { useState } from 'react'
//API KEY DO NOT LEAVE THIS HERE
const apikey = 'AIzaSyBjdxadUjbcBd2t1iQibrqGp5i0cU7njvs'

function Search() {
	const [query, setQuery] = useState('')
	const [books, setBooks] = useState([])

	const searchBooks = async (e) => {
		e.preventDefault()
		const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apikey}`

		try {
			const res = await fetch(url)
			const data = await res.json()
			setBooks(data.items)
			console.log(data.items)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<>
			<form className="form" onSubmit={searchBooks}>
				<label className="label" htmlFor="query">
					Book Name
				</label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="Search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<button className="button" type="submit">
					Search
				</button>
			</form>
		</>
	)
}

export default Search
