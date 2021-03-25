import React from "react";
//create your first component
export class FetchingExample extends React.Component {
	constructor() {
		super();
		this.state = {
			fetchData: []
		};
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
				console.log(this.state.fetchData);
			});
		// console.log(this.fetchData);
	}
	render() {
		return (
			<div className="image-box bg-white">
				<h1>Fetching</h1>
				<div>
					{this.state.fetchData.map((song, i) => {
						return <div key={i}> {song.name} </div>;
					})}
				</div>
			</div>
		);
	}
}