import Box from "@mui/material/Box";
import BasicTable from "./components/table/Table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./api";
import SearchStatus from "./components/SearchStatus";
import { Button, Stack } from "@mui/material";
import Loader from "./components/Loader";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const isLoading = useSelector(({ data }) => data.isLoading);

  const data = useSelector(({ data }) => data.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRequestData = () => {
    dispatch(fetchData());
  };
  const searchedData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {!isLoading ? (
        <div className="App">
          <Box sx={{ padding: 10 }}>
            <Box sx={{ "& button": { m: 1 } }}>
              <Stack direction="row" spacing={3}>
                <SearchStatus onSearch={handleChange} />
                <Button onClick={() => handleRequestData()} size="small" variant="contained">
                  Request new data
                </Button>
              </Stack>
            </Box>

            <BasicTable data={searchedData} />
          </Box>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Loader />
        </div>
      )}
    </>
  );
}

export default App;
