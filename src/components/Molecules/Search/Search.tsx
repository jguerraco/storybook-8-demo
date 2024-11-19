import Button from "../../Atoms/Button/Button";
import Box from "../../Atoms/Box/Box";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";

const Search = () => {
  return (
    <Box variant="flex">
      <Label htmlFor="search" text="Search" />
      <Input id="search" type="text" value="" onChange={() => {}} />
      <Button id="searchButton" label="Search" onClick={() => {}} />
    </Box>
  );
};

export default Search;
