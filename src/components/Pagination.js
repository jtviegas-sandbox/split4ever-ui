
import React from 'react';
import { NavLink } from 'react-router-dom';


const Pagination = ({ first, previous , next, last }) =>
	<nav aria-label="...">
		<ul className="pagination pagination-sm justify-content-end">
			{
				<li className="page-item"><NavLink className="page-link" to={ '/parts/' } >first</NavLink></li>
			}
			{
				null != previous ? <li className="page-item"><NavLink className="page-link" to={ '/parts/?fromKey=' + previous } >previous</NavLink></li>
					: <li className="page-item disabled"><NavLink className="page-link" to={ '/parts/?fromKey=' + previous } >previous</NavLink></li>
			}
			{
				next ? <li className="page-item"><NavLink className="page-link" to={ '/parts/?fromKey=' + next } >next</NavLink></li>
					: <li className="page-item disabled"><NavLink className="page-link" to={ '/parts/?fromKey=' + next } >next</NavLink></li>
			}
			{
				<li className="page-item"><NavLink className="page-link" to={ '/parts/?fromKey=' + last } >last</NavLink></li>
			}

		</ul>
	</nav>

export default Pagination;