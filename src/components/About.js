import React, { Component } from 'react';
export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img
							className="profile-pic"
							src="https://media.licdn.com/dms/image/C4D03AQF5leu5Ub-XBA/profile-displayphoto-shrink_400_400/0/1638291645170?e=1678320000&v=beta&t=k0ArSx4mefltMzMhVmXSzZ0FKwFmV0evKFIql236rGQ"
							alt=""
						/>
					</div>

					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p>{resumeData.aboutme}</p>

						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>{resumeData.name}</span>
									<br />
									<span>{resumeData.address}</span>
									<br />
									<span>{resumeData.website}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
