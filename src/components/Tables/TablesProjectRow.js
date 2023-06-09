import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function TablesProjectRow(props) {

  const { name, price, onehour, oneday, sevenday, marketcap, volume} = props;
  const textColor = useColorModeValue("gray.700", "white");
  // const { logo, name, status, budget, progression } = props;

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Icon as={logo} h={"24px"} w={"24px"} me="18px" /> */}
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {price}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {onehour}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {oneday}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {sevenday}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {marketcap}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {volume}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesProjectRow;