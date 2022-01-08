import AddressCard from "./AddressCard";

const CenterCard = ({ place, cities, bgColor }) => {
  return (
    <div className="centerCard" style={{ backgroundColor: bgColor }}>
      <h3>{place}</h3>
      {cities.map((city) => (
        <div className="card">
          <h2>{city}</h2>
          <div className="cardRow">
            <AddressCard />
            <img src="https://via.placeholder.com/400/" alt="city" />
            <img src="https://via.placeholder.com/400" alt="map" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CenterCard;
