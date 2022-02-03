import  { React, useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';


export const TeamPage = () => {


    const[team, setTeam] = useState({matches: []});
    const { teamName } = useParams();
    
    useEffect(
        

        () => {
            const fetchTeams = async () => {
                const response = await fetch('http://localhost:8080/team/'+ teamName);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchTeams();
        }, [teamName]

    );

    if(!team || !team.teamName){
        return <h1> Team Not Found </h1>
    }
    return (
        console.log(teamName),
        <div className='TeamPage'>
           <div className='team-name-section'> 
                <div className='team-name'> 
                    <h1> {team.teamName}</h1>
                </div>
           </div>
        <div className='win-lose-section'>
            Wins / Losses

            <PieChart
             data={[
                { title: 'Wins', value: team.totalWins, color: '#4da375' },
                { title: 'Loses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
    
            ]}/>
        </div>
        <div  className='match-detail-section'> 
            <h2>Latest matches</h2>
            <MatchDetailCard teamName = {team.teamName}  match={team.matches[0]}/>
        </div>

        {team.matches.slice(1).map(match => <MatchSmallCard teamName = {team.teamName} match= {match}/>)}
        <div  className='more-link'>
        <Link to={'/teams/'+teamName+'/matches/'+process.env.REACT_APP_DATA_END_YEAR}> More {'>'}</Link>
        </div>

        </div>
    ) 
}