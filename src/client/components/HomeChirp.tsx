import * as React from 'react';
import { IChirp } from '../utils/types'; 
import { useHistory} from 'react-router-dom';

const HomeChirp: React.FC<HomeChirpProps> = (props) => {
    const history = useHistory()
    
    return (
        <div className="col-md-6 mx-1">
            <div onClick={() => history.push(`/details/${props.chirp.id}`)} className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">{props.chirp.user}</h4>
                    <p className="card-text">{props.chirp.msg}</p>
                </div>
            </div>
        </div>
    )
}

interface HomeChirpProps {
    chirp: IChirp
}

export default HomeChirp