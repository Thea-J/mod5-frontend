import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from "react-router-dom";


class SectorCard extends Component {
    

    renderCard = () => {
        const sectorObj = this.props.sectorData
        for (const key in sectorObj) {
            return (<>
            {/* {console.log(sectorObj)}
            {console.log(sectorObj.sector)} */}
            <Link to={{
                pathname:`/sector/${sectorObj.sector}`,
                // state: {sectorName: key, imgUrl:sectorObj[key]}
                }}>
            <Image src={sectorObj.imgUrl} wrapped ui={false}  />
            </Link>
            <Card.Content> <Card.Header> {sectorObj.sector} </Card.Header>  </Card.Content>
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