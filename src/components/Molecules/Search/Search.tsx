import Button from "@/components/Atoms/Button/Button";
import Box from "@/components/Atoms/Box/Box";
import Input from "@/components/Atoms/Input/Input";
import Label from "@/components/Atoms/Label/Label";

const Search = () => {
  return (
    <Box>
      <Label htmlFor="search" text="Search" />
      <Input id="search" type="text" value="" onChange={() => {}} />
      <Button id="searchButton" label="Search" onClick={() => {}} />
    </Box>
  );
};

export default Search;
