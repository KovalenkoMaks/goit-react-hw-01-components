import BookList from "./BookList/BookList"
export default function Statistics({ title, stats }) {
    return <section className="statistics">
        {title && (
             <h2 className="title">Upload stats</h2>
        )}

  <ul className="stat-list">
            {stats.map(e => {
                return <BookList
                    key={e.id}
                    data = {e}
                />
            })}
  </ul>
</section>
}