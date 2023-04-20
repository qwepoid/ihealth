const PharmacyCard = ({ title, address, distance, status, prodImage }) => {
  return (
    <div className="h-44 w-full bg-white p-4 flex rounded-lg">
      <img className="h-20 aspect-square border m-2" src={prodImage} />
      <div className="flex flex-col relative w-full m-4">
        <div>{title}</div>
        <div className="line-clamp-2">{address}</div>
        <div className="absolute bottom-0">{distance} KM away</div>
        <button className="absolute bottom-0 right-0">{status}</button>
      </div>
    </div>
  );
};

export default PharmacyCard;
