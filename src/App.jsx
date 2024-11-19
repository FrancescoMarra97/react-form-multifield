import { useState } from 'react'

import './App.css'

const articleTitle = [

]
function App() {
  const [titles, setTitle] = useState(articleTitle)
  const [newTitle, setNewTitle] = useState("")

  function addTitle(e) {
    e.preventDefault()

    console.log(articleTitle)
    setTitle([
      ...titles,
      newTitle
    ])

    setNewTitle("")
  }

  function handleTrashTitleClick(e) {

    const titleIndexToTrash = Number(e.target.getAttribute("data-index"))
    console.log(titleIndexToTrash);
    const removeTitles = titles.filter((title, index) => index != titleIndexToTrash)
    console.log(removeTitles);
    setTitle(removeTitles)
  }
  return (
    <>

      <div className="container">

        <div>
          <h1 className='mb-4'>Form</h1>
        </div>
        <form onSubmit={addTitle}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add new article"
              aria-label="Recipient's username" aria-describedby="button-addon2"
              value={newTitle} onChange={e => setNewTitle(e.target.value)} />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
          </div>
          <small id='titleHelperId' className='mb-3 form-text text-muted'>type your new title</small>
        </form>

        <ul className='list-group'>
          {titles.map((articleTitle, index) =>
            <li key={index} className='list-group-item d-flex justify-content-between'>
              {articleTitle}
              <button className="btn btn-sm btn-danger" onClick={handleTrashTitleClick} data-index={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </button>
            </li>)}

        </ul>
      </div>
    </>
  )
}

export default App
