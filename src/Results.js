import Pet from "./Pet";

function Results(props) {
  return (
    <div className="search">
      {!props.pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        props.pets.map((pet) => (
          <Pet
            name={pet.name}
            key={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
