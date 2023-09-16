import ReactGoogleAutocomplete from "react-google-autocomplete";

function CityAutocomplete({ country, ...rest }) {
  return (
    <ReactGoogleAutocomplete
      placeholder={country ? "Search City" : "Please select country first"}
      className="form-control"
      disabled={!country}
      apiKey=""
      // defaultValue={"Please select country"}
      // onBlur={() => handleBlur({ target: { name: "city" } })}
      // onPlaceSelected={(place) => {
      //   handleChange({
      //     target: {
      //       name: "city",
      //       value: place.formatted_address,
      //     },
      //   });
      // }}
      options={{
        types: ["(cities)"],
        componentRestrictions: { country: country },
      }}
      {...rest}
    />
  );
}
export default CityAutocomplete;
