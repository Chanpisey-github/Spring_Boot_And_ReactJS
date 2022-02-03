import  { React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { MatchDetailCard } from '../components/MatchDetailCard';




export const MatchPage = () => {


    const[matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/'+ teamName+ '/matches?year='+year);
                const data = await response.json();
                console.log(data);
                setMatches(data);
            };
            fetchMatches();
        }, [year,teamName]

    );

    // if(!matches || !matches.teamName || !matches.year){
    //     return <h1> Team Not Found </h1>
    // }
    return (
         
        <div className='MatchPage'>
            <h2> Match page</h2>
            {matches.map(match => <MatchDetailCard teamName = {teamName} match= {match}/>)}
        </div>
    ) 
}