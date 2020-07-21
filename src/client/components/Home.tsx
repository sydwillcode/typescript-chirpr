import * as React from 'react';
import { useState, useEffect } from 'react';
import { IChirp } from '../utils/types'; 
import HomeChirp from "./HomeChirp";

const Home: React.FC<HomeProps> = () => {
    //useState syntax, and use interface array type
    const [chirps, setChirps] = useState<IChirp[]>([])

    //useEffect syntax
    const getChirps = async () => {
        let res = await fetch('/api/chirps')
        let chirps = await res.json()
        setChirps(chirps)
    }
    useEffect(() => {
        getChirps()
    }, [])
    
    return (
        <>
        <main className="container">
            <section className="row my-2 justify-content-center">
                {chirps.map(chirp => (
                    <HomeChirp key={chirp.id} chirp={chirp} />
                ))}
            </section>
        </main>
        </>
    )
}
interface HomeProps {}
export default Home


