import React from 'react'

function BookCard({ book }) {
	return (
		<div className="card">
			<div>
				{book.volumeInfo.imageLinks ? (
					<img
						src={book.volumeInfo.imageLinks.thumbnail}
						alt="book thumbnail"
					/>
				) : (
					<p>no image</p>
				)}
			</div>
			<div className="card--info">
				<h2 className="card--title">{book.volumeInfo.title}</h2>
				<h3 className="card--subtitle">{book.volumeInfo.subtitle}</h3>
				<p className="card--author">By: {book.volumeInfo.authors}</p>
				<p className="card--publisher">Publisher: {book.volumeInfo.publisher}</p>
				<a href={book.volumeInfo.infoLink}>
					<div>View this book</div>
				</a>
			</div>
		</div>
	)
}

export default BookCard
