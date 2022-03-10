import React from 'react'

const PokemonAbility = ({ abilityName, hidden }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">
      {hidden ? 'Hidden Ability' : 'Normal Ability'}
    </div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
