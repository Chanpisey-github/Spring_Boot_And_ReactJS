import  { React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../compponents/MatchDetailCard';
import { MatchSmallCard } from '../compponents/MatchSmallCard';



export const TeamPage = () => {


    const[team, setTeam] = useState({matches: []});
   
 
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/Mumbai Indians');
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, []

    );


    return (
        <div className='TeamPage'>
            <h1> Team name In Fetch From API </h1>
            <h1> {team.teamName}</h1>

            <MatchDetailCard match={team.matches[0]}/>
           {team.matches.slice(1).map(match => <MatchSmallCard match= {match}/>)}

        </div>
      

    )

}


export default TeamPage;
