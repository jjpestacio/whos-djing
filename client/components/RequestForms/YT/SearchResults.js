import React, { Component } from 'react'

import ItemList from '../../ItemList'

export default class SearchResults extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { addVideo, videos } = this.props;

		return (
			<div className='searchResults'>
				<ItemList 
					items={videos} 
					onClick={video => addVideo(video)} />
			</div>
		)
	}
}