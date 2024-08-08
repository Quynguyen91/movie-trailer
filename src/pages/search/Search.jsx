import React from 'react';
import NavBar from '../browse/NavBar/NavBar';
import SearchForm from './SearchForm/SearchForm';
import ResultList from './ResultList/ResultList';
import './Search.css';

const Search = () => {
	return (
		<div className='searchContainer'>
			<NavBar/>
			<SearchForm/>
			<ResultList/>
		</div>
	);
};

export default Search;
