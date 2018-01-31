import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {




  render() {
    let final = this.props.pets.map( p => <Pet pet={p} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(p.id)}/>)

    return(
      <div className="ui cards">
        {final}
      </div>
    )
  }
}

export default PetBrowser;
