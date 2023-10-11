import "./Search.css";

export default function Search({ filterbyCity, citiesMenu, search, handleChange }) {
  const handleSelected = (e) => {
    filterbyCity(e.target.value);
  };

  return (
    <div>
      <div className="searchbar">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />

        <select onChange={handleSelected}>
          {citiesMenu?.map((city) => {
            return (
              <option key={`city-${city.id}`} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
