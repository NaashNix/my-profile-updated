import React from 'react';
import classes from './MenuBar.module.css';

const MenuBar = () => {
   return (
		<div className={classes.menuBarContainer}>
			<span className={classes.logo}>NAASHNIX</span>
			<div>
				<a className={`${classes.menuItems} ${classes.active}`} href="">
					HOME
				</a>
				<a className={classes.menuItems} href="">
					ABOUT ME
				</a>
				<a className={classes.menuItems} href="">
					EDUCATION
				</a>
				<a className={classes.menuItems} href="">
					PROJECTS
				</a>
				<a className={classes.menuItems} href="">
					CONTACT
				</a>
			</div>
			<a className={classes.startPjctBtn} href="">START A PROJECT</a>
		</div>
	);
}

export default MenuBar;
