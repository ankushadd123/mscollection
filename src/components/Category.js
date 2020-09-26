import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class Category extends React.Component {

	render() {
		return (
				<div>
					<Table responsive>
					  <tbody>
					    <tr>
					      <td className="Table-block"><Button variant="warning" className="Category-button">Jjjjj</Button></td>
					     <td className="Table-block"><Button variant="warning" className="Category-button">Sssss</Button></td>
					    </tr>
					    <tr>
					      <td className="Table-block"><Button variant="warning" className="Category-button">Ccccc</Button></td>
					      <td className="Table-block"><Button variant="warning" className="Category-button">Oooooo</Button></td>
					    </tr>
					  </tbody>
					</Table>
				</div>
			);
	}
}

export default Category