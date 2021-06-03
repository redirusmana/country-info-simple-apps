import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { CSSReset, ThemeProvider, theme, Flex, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <React.Fragment>
          <Flex
            bg="green.600"
            w="100%"
            px={5}
            py={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text pl={3} py="2" color="white" fontWeight="bold">
                <LinkRouter to="/">Country Info Apps</LinkRouter>
              </Text>
            </Flex>
            {/* <Box display="flex">
              <Link
                m={2}
                as={LinkRouter}
                onClick={handleLogout}
                color="white"
                fontWeight="bold"
                to="login"
              >
                Logout
              </Link>
            </Box> */}
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
