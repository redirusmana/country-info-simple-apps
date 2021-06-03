import React from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Box,
  Center,
  Text,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ListItem,
  UnorderedList,
  Spinner,
  OrderedList
} from "@chakra-ui/react";
import { FETCH_EMPTY } from "../Actions/Types";

export const CountryTableIndex = props => {
  const { dataSource, loading } = props;
  const handleDetail = countryName => {
    props.fetchEmptyDataSource();
    props.history.push(`/${countryName}`);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box borderRadius="md" mx="5" py="1">
          {props && props.dataSource && !loading ? (
            <React.Fragment>
              <Flex>
                <Box
                  width="100%"
                  bg="white"
                  padding="5"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Heading
                    fontWeight="bold"
                    fontStyle="italic"
                    fontSize="20px"
                    pb="5"
                  >
                    <Center>List Country</Center>
                  </Heading>
                  <Box overflowX="auto">
                    <Table variant="striped" size="sm" borderWidth="1">
                      <Thead>
                        <Tr>
                          <Th>No</Th>
                          <Th>name</Th>
                          <Th>Native Name</Th>
                          {/* <Th textAlign="center" px="10" mx="10">
                            flag
                          </Th> */}
                          <Th>Capital</Th>
                          <Th>Alpha 2 Code</Th>
                          <Th>Alpha 3 Code</Th>
                          <Th>Area</Th>
                          <Th>Cioc</Th>
                          <Th>Currencies</Th>
                          <Th>Demonym</Th>
                          <Th>Calling Codes</Th>
                          <Th>Language</Th>
                          <Th>Numeric Code</Th>
                          <Th>Population</Th>
                          <Th>Region</Th>
                          <Th>Regional Block</Th>
                          <Th>Sub Region</Th>
                          <Th>Timezones</Th>
                          <Th>Top Level Domain</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {props &&
                        dataSource &&
                        Array.isArray(dataSource) &&
                        dataSource.length > 0 ? (
                          dataSource.map((li, index) => {
                            return (
                              <Tr
                                key={index}
                                onClick={() => handleDetail(li.name)}
                                cursor="pointer"
                              >
                                <Td>{index + 1}</Td>
                                <Td>{li.name || "-"}</Td>
                                <Td>{li.nativeName || "-"}</Td>
                                {/* <Td>
                                  <Text textAlign="center">
                                    <Image
                                      margin="auto"
                                      boxSize="50px"
                                      src={li.flag}
                                      alt={li.flag}
                                    />
                                  </Text>
                                </Td> */}
                                <Td>{li.capital || "-"}</Td>
                                <Td>{li.alpha2Code || "-"}</Td>
                                <Td>{li.alpha3Code || "-"}</Td>
                                <Td>{li.area || "-"}</Td>
                                <Td>{li.cioc || "-"}</Td>
                                <Td>
                                  {li.currencies &&
                                  Array.isArray(li.currencies) &&
                                  li.currencies.length > 0
                                    ? li.currencies.map((cr, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <Text>{`${cr.code} - ${cr.name} - ${cr.symbol}`}</Text>
                                          </React.Fragment>
                                        );
                                      })
                                    : []}
                                </Td>
                                <Td>{li.demonym || "-"}</Td>
                                <Td>
                                  {li.callingCodes &&
                                  Array.isArray(li.callingCodes) &&
                                  li.callingCodes.length > 0
                                    ? li.callingCodes.map(cd => {
                                        return (
                                          <React.Fragment key={cd}>
                                            <Text>{cd}</Text>
                                          </React.Fragment>
                                        );
                                      })
                                    : []}
                                </Td>
                                <Td>
                                  {li.languages &&
                                  Array.isArray(li.languages) &&
                                  li.languages.length > 0
                                    ? li.languages.map((lh, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <Text>{`${lh.iso639_1} - ${lh.iso639_2} - ${lh.name} - ${lh.nativeName}`}</Text>
                                          </React.Fragment>
                                        );
                                      })
                                    : []}
                                </Td>
                                <Td>{li.numericCode || "-"}</Td>
                                <Td>{li.population || "-"}</Td>
                                <Td>{li.region || "-"}</Td>
                                <Td>
                                  {li.regionalBlocs &&
                                  Array.isArray(li.regionalBlocs) &&
                                  li.regionalBlocs.length > 0
                                    ? li.regionalBlocs.map((rb, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <Text>{`${rb.acronym} - ${rb.name}`}</Text>
                                          </React.Fragment>
                                        );
                                      })
                                    : []}
                                </Td>
                                <Td>{li.subregion || "-"}</Td>
                                <Td>
                                  <OrderedList>
                                    {li.timezones &&
                                    Array.isArray(li.timezones) &&
                                    li.timezones.length > 0
                                      ? li.timezones.map(tz => {
                                          return (
                                            <React.Fragment key={tz}>
                                              <ListItem>{tz}</ListItem>
                                            </React.Fragment>
                                          );
                                        })
                                      : []}
                                  </OrderedList>
                                </Td>
                                <Td>
                                  <UnorderedList>
                                    {li.topLevelDomain &&
                                    Array.isArray(li.topLevelDomain) &&
                                    li.topLevelDomain.length > 0
                                      ? li.topLevelDomain.map(tpd => {
                                          return (
                                            <React.Fragment key={tpd}>
                                              <ListItem>{tpd}</ListItem>
                                            </React.Fragment>
                                          );
                                        })
                                      : []}
                                  </UnorderedList>
                                </Td>
                                {/* <Td>{li["state-province"] || "-"}</Td> */}
                              </Tr>
                            );
                          })
                        ) : (
                          <Td colSpan="19" textAlign="center">
                            <Text textAlign="center" fontWeight="bold">
                              Not Found
                            </Text>
                          </Td>
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </Flex>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box m="auto" p="auto">
                <Center>
                  <Spinner
                    thickness="8px"
                    speed="0.65s"
                    emptyColor="gray.100"
                    color="green.600"
                    size="xl"
                  />
                </Center>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.searchs.dataSource,
  filters: state.searchs.filters,
  loading: state.searchs.loading
});
const mapDispatchToProps = dispatch => ({
  fetchEmptyDataSource: () =>
    dispatch({
      type: FETCH_EMPTY
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryTableIndex);
