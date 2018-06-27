import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

let card = {}

axios.get('https://api.opensea.io/api/v1/events/?event_type=successful&asset_contract_address=0xdcaad9fd9a74144d226dbf94ce6162ca9f09ed7e&limit=10')
.then(function (data) {
  console.log(data)
    let assets = data.data.asset_events
    // console.log(assets)
    //const result = assets.filter(asset => asset.total_price > 0);
    const lastSoldCard = assets[0]
    const cardName = lastSoldCard.asset.name
    const cardImage = lastSoldCard.asset.image_url
    const cardSaleTime = lastSoldCard.transaction.created_date

    var timeZone = cardSaleTime;
    var dt = new Date(timeZone.replace(' ', 'T') + "Z");
    var hours = dt.getHours(); 
    var minutes = dt.getMinutes();

    const sale = lastSoldCard.total_price / 1000000000000000000;
    card = {
      card_name: cardName,
      card_image: cardImage,
      card_sale: sale,
      card_sale_time: hours + ':' + minutes
    };
    console.log(card)
});

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
