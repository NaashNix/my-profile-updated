import React,{useState, useEffect} from 'react';
import classes from './MenuBar.module.css';


const MenuBar = () => {

	const [menuClicked, setMenuClicked] = useState(false); 

	useEffect(() => {
		
		return () => {
			
		};
	}, [menuClicked]);

   return (
		<div className={classes.menuBarContainer}>
			<input
				type="checkbox"
				onClick={(e) => {
					setMenuClicked(e.target.checked);
				}}
				className={classes.check}
			/>

			<label htmlFor="check" className={classes.checkBtn}>
				<i className={classes.menuIcon}></i>
			</label>

			<span className={classes.logo}>NAASHNIX</span>

			<div className={classes.elementHolder}>
				<ul className={classes.menuOptionUl}>
					<li>
						<a className={classes.menuItems} href="">
							HOME
						</a>
					</li>
					<li>
						<a className={classes.menuItems} href="">
							EDUCATION
						</a>
					</li>
				</ul>
			</div>

			<a className={classes.startPjctBtn} href="">
				START A PROJECT
			</a>
		</div>
	);
}

export default MenuBar;
