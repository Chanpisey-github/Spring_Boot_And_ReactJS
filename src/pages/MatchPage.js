import  { React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';



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

            <div className='year-selector'> 
                <h3> Select Years:</h3>
                <YearSelector teamName={teamName}/>

            </div>
            <div> 
            <h2> {teamName} matches in {year}</h2>
            {matches.map(match => <MatchDetailCard teamName = {teamName} match= {match}/>)}
            </div>

        </div>
    ) 
}