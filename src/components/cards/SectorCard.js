import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from "react-router-dom";


class SectorCard extends Component {
    

    renderCard = () => {
        const sectors = this.props.sectorData
        for (const key in sectors) {
            return (<>
            <Link to={{
                pathname:`/businesses/${key}`,
                // sectorDetails: {sectorName: key, imgUrl:sectors[key]}
                state: {sectorName: key, imgUrl:sectors[key]}

                }}>
            {/* <Link to={`/businesses/${key}`} params={{ key: sectors[key] }}> */}
            <Image src={sectors[key]} wrapped ui={false} />
            <Card.Content> <Card.Header> {key} </Card.Header>  </Card.Content>
            </Link>
            </>)
        } 
    }


    render() {
    return (
      <div className="sectorCard">
      <Card>
        {this.renderCard()}
      </Card>
      </div>
    );
  }
}

export default SectorCard;