$(document).ready(() => {
    //Get Chirps
    $.get("/api/chirps", chirps => {
        const writeArr = Object.entries(chirps);
        writeArr.forEach(chirp => {

            $("#chirpcontainer").append(                `
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">${chirp[1].username}</h5>
                        <p className="card-text">${chirp[1].message}</p>
                         type="button" className="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
                    </div>
                </div>
                `
            )
        })
    })

    //Submit New Chirp On Click using jQuery
    $('#chirp-submit').click((e) => {
        e.preventDefault();
        let username = $('#input-username').val();
        let message = $('#input-chirp').val();
        const data = {
            username: username,
            message: message
        };

        $.post('http://localhost:3000/api/chirps', data).done((data) => {
            console.log('Post Saved');
            $('#chirpcontainer').append('<h6>' + username + '<h6>', '<p>' + message + '</p>');
        })
    })

    const deleteChirp = id => {
        $.ajax(`/api/chirps/${id}`, { method: "delete" })
    };

    








})
