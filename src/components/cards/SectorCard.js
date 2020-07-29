import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from "react-router-dom";


class SectorCard extends Component {
    

    renderCard = () => {
        const sectors = this.props.sectorData
        for (const key in sectors) {
            return (<>
            {/* {console.log(sectors)} */}
            <Link to={{
                pathname:`/sector/${key}`,
                // state: {sectorName: key, imgUrl:sectors[key]}
                }}>
            <Image src={sectors[key]} wrapped ui={false}  />
            </Link>
            <Card.Content> <Card.Header> {key} </Card.Header>  </Card.Content>
            </>)
        } 
    }


    render() {
    return (
      <div className="sectorCard">
      <Card >
        {this.renderCard()}
      </Card>
      </div>
    );
  }
}

export default SectorCard;