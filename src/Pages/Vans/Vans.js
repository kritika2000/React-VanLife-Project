import React, { useState, useEffect,  } from 'react'
import styles from './Vans.module.css'
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Van(props){
  const van = props.van;
  const typeFilter = props.filters;
  const navigate = useNavigate();

  function navigateToVan(){
    // absolute route, if /vans/ was was not added it would have become a relative route.
    navigate(`/vans/${van.id}`, { state: { van, filter: typeFilter } });
  }

  return (
    <div className={styles.vanContainer} onClick={navigateToVan}>
      <img src={van.imageUrl} alt={van.name}/>
      <div className={styles.vanInfoContainer}>
        <p>{van.name}</p>
        <p>${van.price}/day</p>
      </div>
      <button style={{ backgroundColor: van.type === 'simple' ? '#FF8C38' : van.type === 'rugged' ? 'darkgreen' : 'black' }}>{capitalizeFirstLetter(van.type)}</button>
    </div>
  )
}

function Vans() {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const simpleStyle = {
    backgroundColor: 'rgb(255, 140, 56)',
    color: '#FFF'
  }

  const ruggedStyle = {
    backgroundColor: 'darkgreen',
    color: '#FFF'
  }

  const luxuryStyle = {
    backgroundColor: 'black',
    color: '#FFF'
  }

  useEffect(() => {
    axios.get('api/vans').then(response => {
      setVans(response.data.vans);
      setIsLoading(false);
    });
  }, [])

  function applyFilter(type){
    setSearchParams({type});
  }

  function clearFilters(){
    setSearchParams({});
  }

  const typeFilter = searchParams.get('type');
  const allVanItems = !typeFilter ? vans.map((van) => <Van key={van.id} van={van} filters={searchParams.toString()}/>) 
  : vans.filter((van) => van.type === typeFilter).map((van) => <Van key={van.id} van={van} filters={searchParams.toString()}/>);
  
  return (
     <div className={styles.vansContainer}>
      <h2>Explore our van options</h2>
      <div className={styles.filtersContainer}>
        <button className={styles.simple} style={typeFilter === 'simple' ? simpleStyle : null } onClick={() => applyFilter('simple')}>Simple</button>
        <button className={styles.rugged} style={typeFilter === 'rugged' ? ruggedStyle : null } onClick={() => applyFilter('rugged')}>Rugged</button>
        <button className={styles.luxury} style={typeFilter === 'luxury' ? luxuryStyle : null } onClick={() => applyFilter('luxury')}>Luxury</button>
        <button style={{backgroundColor: '#FFF7ED', border: 'none', textDecoration: 'underline'}} onClick={clearFilters}>Clear Filters</button>
      </div>
      {isLoading ? <div className={styles.isLoading}>Loading...</div> : <div className={styles.vansListContainer}>
        {allVanItems}
      </div>
      }
    </div>
  )
}

export default Vans