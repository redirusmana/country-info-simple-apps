import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Flex,
  Box,
  Heading,
  Center,
  Text,
  Image,
  Table,
  Thead,
  Tr,
  Th,
  Button,
  Spinner
} from "@chakra-ui/react";
import { apiCountryByFullNameGet } from "../Tools/action";

export const CountryDetail = props => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTranslt, setShowTranslt] = useState(false);
  const getCountryDetail = async () => {
    try {
      const fullName = { fullText: true };
      const response = await apiCountryByFullNameGet(
        props.match.params.country,
        fullName
      );
      const { data } = response;
      setDataSource(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleShowTranslt = () => {
    setShowTranslt(!showTranslt);
  };

  useEffect(() => {
    getCountryDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box borderRadius="md" mx="5" py="1">
          {dataSource &&
          Array.isArray(dataSource) &&
          dataSource.length > 0 &&
          !loading ? (
            dataSource.map(data => {
              return (
                <React.Fragment>
                  <Flex my="5">
                    <Box
                      w="100%"
                      padding="5"
                      bg="white"
                      mr="5"
                      border
                      boxShadow="lg"
                      borderRadius="md"
                      fontSize="24"
                    >
                      <Heading
                        textAlign=""
                        fontWeight="bold"
                        fontSize="20px"
                        pb="2"
                      >
                        Main Information
                      </Heading>
                      <Table variant="striped" size="sm" borderWidth="1">
                        <Thead>
                          <Tr>
                            <Th>Common</Th>
                            <Th>{data.name}</Th>
                          </Tr>
                          <Tr>
                            <Th>Official</Th>
                            <Th>
                              {data &&
                                data.altSpellings &&
                                Array.isArray(data.altSpellings) &&
                                data.altSpellings.length > 0 &&
                                data.altSpellings[1]}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>Common (Native)</Th>
                            <Th>{data.nativeName}</Th>
                          </Tr>
                          <Tr>
                            <Th>Official (Native)</Th>
                            <Th>
                              {data &&
                                data.altSpellings &&
                                Array.isArray(data.altSpellings) &&
                                data.altSpellings.length > 0 &&
                                data.altSpellings[2]}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>Alternative spellings</Th>
                            <Th>
                              {data &&
                                data.altSpellings &&
                                Array.isArray(data.altSpellings) &&
                                data.altSpellings.length > 0 &&
                                data.altSpellings.map(alt => {
                                  return (
                                    <React.Fragment key={alt}>
                                      {alt}
                                      <br />
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                          {/* <Tr>
                            <Th colSpan="2">Translations</Th>
                            
                          </Tr> */}
                        </Thead>
                      </Table>
                    </Box>

                    <Box
                      w="100%"
                      padding="5"
                      mr="5"
                      bg="white"
                      border
                      boxShadow="lg"
                      borderRadius="md"
                      fontSize="24"
                    >
                      <Heading
                        textAlign=""
                        fontWeight="bold"
                        fontSize="20px"
                        pb="2"
                      >
                        Language
                      </Heading>
                      <Table variant="striped" size="sm" borderWidth="1">
                        <Thead>
                          {data &&
                            data.languages &&
                            Array.isArray(data.languages) &&
                            data.languages.length > 0 &&
                            data.languages.map((lang, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <Tr>
                                    <Th>name</Th>
                                    <Th>{lang.name}</Th>
                                  </Tr>
                                  <Tr>
                                    <Th>Native</Th>
                                    <Th>{lang.nativeName}</Th>
                                  </Tr>
                                  <Tr>
                                    <Th>Languages</Th>
                                    <Th>
                                      {lang.iso639_1}, {lang.iso639_2}
                                    </Th>
                                  </Tr>
                                </React.Fragment>
                              );
                            })}
                          <Tr>
                            <Th vAlign="top">Translations</Th>
                            <Th>
                              {data && data.translations && showTranslt && (
                                <React.Fragment>
                                  deu : {data.translations.de}
                                  <br />
                                  fa : {data.translations.fa}
                                  <br />
                                  fra : {data.translations.fr}
                                  <br />
                                  hrv : {data.translations.hr}
                                  <br />
                                  ita : {data.translations.it}
                                  <br />
                                  jpn : {data.translations.ja}
                                  <br />
                                  nld : {data.translations.nl}
                                  <br />
                                  prt : {data.translations.pt}
                                  <br />
                                  spa : {data.translations.es}
                                  <br />
                                </React.Fragment>
                              )}
                              <Button
                                onClick={handleShowTranslt}
                                size="sm"
                                variant="link"
                              >
                                {showTranslt ? "Hide" : "Show"}
                              </Button>
                            </Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </Box>

                    <Box
                      w="100%"
                      padding="5"
                      bg="white"
                      border
                      boxShadow="lg"
                      borderRadius="md"
                      fontSize="24"
                    >
                      <Heading
                        textAlign=""
                        fontWeight="bold"
                        fontSize="20px"
                        pb="2"
                      >
                        Flag
                      </Heading>
                      <Center>
                        <Text>
                          <Image
                            boxSize="200px"
                            src={data.flag}
                            alt={data.name}
                          />
                        </Text>
                      </Center>
                    </Box>
                  </Flex>
                  <Flex my="5">
                    <Box
                      w="100%"
                      padding="5"
                      bg="white"
                      mr="5"
                      border
                      boxShadow="lg"
                      borderRadius="md"
                      fontSize="24"
                    >
                      <Heading
                        fontWeight="bold"
                        fontStyle="italic"
                        fontSize="20px"
                        pb="2"
                      >
                        Codes
                      </Heading>
                      <Table variant="striped" size="sm" borderWidth="1">
                        <Thead>
                          <Tr>
                            <Th>ISO 3166-1 alpha-2</Th>
                            <Th>{data.alpha2Code}</Th>
                          </Tr>
                          <Tr>
                            <Th>ISO 3166-1 alpha-3</Th>
                            <Th>{data.alpha3Code}</Th>
                          </Tr>
                          <Tr>
                            <Th>ISO 3166-1 numeric</Th>
                            <Th>{data.numericCode}</Th>
                          </Tr>
                          <Tr>
                            <Th>International calling code</Th>
                            <Th>
                              {data &&
                                data.callingCodes &&
                                Array.isArray(data.callingCodes) &&
                                data.callingCodes.length > 0 &&
                                data.callingCodes.map(cd => {
                                  return (
                                    <React.Fragment key={cd}>
                                      {cd},
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>ISO 4217 currency code</Th>
                            <Th>
                              {data &&
                                data.currencies &&
                                Array.isArray(data.currencies) &&
                                data.currencies.length > 0 &&
                                data.currencies.map(currency => {
                                  return (
                                    <React.Fragment key={currency.code}>
                                      {currency.code} ,
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>Currencies</Th>
                            <Th>
                              {data &&
                                data.currencies &&
                                Array.isArray(data.currencies) &&
                                data.currencies.length > 0 &&
                                data.currencies.map(currency => {
                                  return (
                                    <React.Fragment key={currency.code}>
                                      {currency.name} ({currency.symbol})
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>Top level domain</Th>
                            <Th>
                              {data &&
                                data.topLevelDomain &&
                                Array.isArray(data.topLevelDomain) &&
                                data.topLevelDomain.length > 0 &&
                                data.topLevelDomain.map(tld => {
                                  return (
                                    <React.Fragment key={tld}>
                                      {tld},
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </Box>

                    <Box
                      w="100%"
                      padding="5"
                      mr="5"
                      bg="white"
                      border
                      boxShadow="lg"
                      borderRadius="md"
                      fontSize="24"
                    >
                      <Heading
                        fontWeight="bold"
                        fontSize="20px"
                        pb="2"
                        fontStyle="italic"
                      >
                        Geography
                      </Heading>
                      <Table variant="striped" size="sm" borderWidth="1">
                        <Thead>
                          <Tr>
                            <Th>Region</Th>
                            <Th>{data.region}</Th>
                          </Tr>
                          <Tr>
                            <Th>Subregion</Th>
                            <Th>{data.subregion}</Th>
                          </Tr>
                          <Tr>
                            <Th>Capital</Th>
                            <Th>{data.capital}</Th>
                          </Tr>
                          <Tr>
                            <Th>Demonym</Th>
                            <Th>{data.demonym}</Th>
                          </Tr>
                          <Tr>
                            <Th>Lat/Lng</Th>
                            <Th>
                              {data &&
                                data.latlng &&
                                Array.isArray(data.latlng) &&
                                data.latlng.length > 0 &&
                                data.latlng.map(ltln => {
                                  return (
                                    <React.Fragment key={ltln}>
                                      {ltln},
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                          <Tr>
                            <Th>Area</Th>
                            <Th>{data.area}KM²</Th>
                          </Tr>
                          <Tr>
                            <Th>
                              {/* <Text fontWeight="bold" fontSize="20px"> */}
                              Land borders :{/* </Text> */}
                            </Th>
                            <Th>
                              {data &&
                                data.borders &&
                                Array.isArray(data.borders) &&
                                data.borders.length > 0 &&
                                data.borders.map(border => {
                                  return (
                                    <React.Fragment key={border}>
                                      {border},
                                    </React.Fragment>
                                  );
                                })}
                            </Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </Box>
                  </Flex>
                </React.Fragment>
              );
            })
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(CountryDetail);
