import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Admin: React.FC<AdminProps> = () => {
    const { id } = useParams()
    const history = useHistory()

    const [user, setUser] = useState<string>('')
    const [msg, setMsg] = useState<string>('')

    const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let res = await fetch(`/api/chirps/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify({user: user, msg: msg})
        })

        if (res.ok) {
            history.push('/')
        } else {
            console.log('Error')
        }
    }

    const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let res = await fetch(`/api/chirps/${id}`, {
            method: "DELETE", 
        })
        if (res.ok) {
            history.push('/')
        } else {
            console.log('Error')
        }
    }

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`)
            let chirp = await res.json()
            setUser(chirp.user)
            setMsg(chirp.msg)
        })()
    }, []
    );

    return (
        <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 shadow border">
            <label htmlFor="user">User</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              id="user"
              type="text"
              className="form-control"
            />
            <label htmlFor="text">Message</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={8}
              id="text"
              name="text"
              className="form-control"
            />
            <button
              onClick={saveEdit}
              className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              Save Edit
            </button>
            <button
              onClick={deleteChirp}
              className="btn btn-outline-danger btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              Delete
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};



interface AdminProps {}

export default Admin
