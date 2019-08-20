import React from 'react';
import { Link } from 'react-router-dom';
export default ({ movies }) => movies.map(({ show: { name, id } }) => <Link key={id} to={`/detail/${id}`}>{name}</Link>);