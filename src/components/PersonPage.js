import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import usePersonInfo from '../hooks/usePersonInfo';
import PersonInfoCard from './PersonInfoCard';
import MoviesList from './MoviesList';
import Footer from './Footer';

const PersonPage = () => {
    const {personId}=useParams();
    const {personInfo,personMovies}=usePersonInfo(personId);
  return (
    <div className='bg-stone-900'>
      <Header/>
      <PersonInfoCard personInfo={personInfo}/>
      <MoviesList title="Known For" movies={personMovies}/>
      <Footer/>
    </div>
  )
}

export default PersonPage
