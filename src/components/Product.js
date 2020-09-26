import React from 'react'

class Product extends React.Component {

	render() {
		return (
					<div className="product-block">
						<img className="product-img"
							 src={this.props.data.image} alt="product-img" />
						<div>
							<p className="p-desc">{this.props.data.name}</p>
							<p className="p-desc">{this.props.data.price}</p>
							<img src={this.props.data.gender === "M" ? "https://i.imgur.com/uxXRvjB.png" : "https://i.imgur.com/5Wxvhv6.png"} alt="gender-ico" />
						</div>						
					</div>
			);
	}
}

export default Product