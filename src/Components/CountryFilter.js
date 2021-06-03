import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Box,
  Select,
  Input
} from "@chakra-ui/react";
import { FETCH_INDEX, FETCH_SEARCH } from "../Actions/Types";
import {
  apiCountryGet,
  apiCountryByRegionBlockGet,
  apiCountryByRegionGet,
  apiCountryByCallingCodeGet,
  apiCountryByCapitalGet,
  apiCountryByLangGet,
  apiCountryByCurrencyGet,
  apiCountryByCodeGet,
  apiCountryByNameGet,
  apiCountryByListCodeGet
} from "../Tools/action";
import { regionBlockDropdown, regionDropdown } from "../Tools/dropdown";

export const CountryFilter = props => {
  const [filterValue, setFilterValue] = useState({});
  const [typingTimeout, setTypingTimeout] = useState(0);

  const onSelectChangeRegionBlock = async event => {
    try {
      const { name, value } = event.target;
      setFilterValue({
        [name]: value,
        region: "",
        callingcode: "",
        capital: "",
        lang: "",
        currency: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ [name]: value });
      const response = await apiCountryByRegionBlockGet(event.target.value);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      getCountryIndex();
    }
  };

  const onSelectChangeRegion = async event => {
    try {
      const { name, value } = event.target;
      setFilterValue({
        [name]: value,
        regionBloc: "",
        callingcode: "",
        capital: "",
        lang: "",
        currency: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ [name]: value });
      const response = await apiCountryByRegionGet(event.target.value);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      getCountryIndex();
    }
  };

  const onChangeCallingCode = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        capital: "",
        lang: "",
        currency: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByCallingCodeGet(value.callingcode);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeCapital = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        lang: "",
        currency: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByCapitalGet(value.capital);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeLang = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        capital: "",
        currency: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByLangGet(value.lang);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeCurrency = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        capital: "",
        lang: "",
        alpha: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByCurrencyGet(value.currency);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeCode = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        capital: "",
        lang: "",
        currency: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByCodeGet(value.alpha);
      const { data } = response;
      props.fetchDataSource([data]);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeListCode = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        capital: "",
        lang: "",
        currency: "",
        name: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByListCodeGet({ codes: value.alphas });
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const onChangeName = async value => {
    try {
      setFilterValue({
        ...value,
        regionBloc: "",
        region: "",
        callingcode: "",
        capital: "",
        lang: "",
        alpha: "",
        currency: ""
      });
      props.setFilter({ ...value });
      const response = await apiCountryByNameGet(value.name);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource([]);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFilterValue({ [name]: value });
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      // eslint-disable-next-line func-names
      setTimeout(function() {
        if (value) {
          if (name === "callingcode") {
            onChangeCallingCode({ [name]: value });
          }
          if (name === "capital") {
            onChangeCapital({ [name]: value });
          }
          if (name === "lang") {
            onChangeLang({ [name]: value });
          }
          if (name === "currency") {
            onChangeCurrency({ [name]: value });
          }
          if (name === "alphas") {
            onChangeListCode({ [name]: value });
          }
          if (name === "alpha") {
            onChangeCode({ [name]: value });
          }
          if (name === "name") {
            onChangeName({ [name]: value });
          }
        } else {
          props.setFilter();
          getCountryIndex();
        }
      }, 800)
    );
  };

  const getCountryIndex = async () => {
    try {
      const response = await apiCountryGet();
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCountryIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box
          border
          borderRadius="lg"
          m="5"
          spacing="8"
          p="1"
          rounded="lg"
          boxShadow="lg"
          bg="white"
        >
          <Heading size="lg" fontSize="20px" mt="4" ml="4">
            Filter Country
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} px={0} m="5">
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.name}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Code</FormLabel>
                <Input
                  type="text"
                  name="alpha"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.alpha}
                />
              </FormControl>
            </GridItem>
            {/* <GridItem pr="10px">
              <FormControl>
                <FormLabel>List Code</FormLabel>
                <Input
                  type="text"
                  name="alphas"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.alphas}
                />
              </FormControl>
            </GridItem> */}
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Currency</FormLabel>
                <Input
                  type="text"
                  name="currency"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.currency}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Language</FormLabel>
                <Input
                  type="text"
                  name="lang"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.lang}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Capital</FormLabel>
                <Input
                  type="text"
                  name="capital"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.capital}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Calling Code</FormLabel>
                <Input
                  type="number"
                  name="callingcode"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  bg="white"
                  value={filterValue.callingcode}
                />
              </FormControl>
            </GridItem>
          </Grid>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} px={0} m="5">
          <GridItem pr="10px" colSpan="1">
            <FormControl>
              <FormLabel>Region Block</FormLabel>
              <Select
                bg="white"
                id="regionBloc"
                name="regionBloc"
                borderWidth="1"
                placeholder="Choice Select"
                borderColor="gray.400"
                value={filterValue.regionBloc}
                onChange={onSelectChangeRegionBlock}
              >
                {regionBlockDropdown.map((dropdown, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={dropdown.value}>{dropdown.label}</option>
                    </React.Fragment>
                  );
                })}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem pr="10px" colSpan="1">
            <FormControl>
              <FormLabel>Region</FormLabel>
              <Select
                bg="white"
                id="region"
                name="region"
                borderWidth="1"
                placeholder="Choice Select"
                borderColor="gray.400"
                value={filterValue.region}
                onChange={onSelectChangeRegion}
              >
                {regionDropdown.map((dropdown, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={dropdown.value}>{dropdown.label}</option>
                    </React.Fragment>
                  );
                })}
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.searchs.dataSource,
  filters: state.searchs.filters
});

const mapDispatchToProps = dispatch => ({
  fetchDataSource: payload =>
    dispatch({
      type: FETCH_INDEX,
      payload
    }),
  setFilter: payload =>
    dispatch({
      type: FETCH_SEARCH,
      payload
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilter);
