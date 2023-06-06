// Chakra imports
import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader.js";
import TablesProjectRow from "../Tables/TablesProjectRow";


const FrontPageTable = ({ title, captions, data }) => {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} variant={undefined} >
            <CardHeader p='6px 0px 22px 0px' variant={undefined} >
                <Flex direction='column'>
                    <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                        {title}
                    </Text>
                </Flex>
            </CardHeader>
            <CardBody variant={undefined} >
                <Table variant='simple' color={textColor}>
                    <Thead>
                        <Tr my='.8rem' pl='0px'>
                            {captions.map((caption, idx) => {
                                return (
                                    <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                                        {caption}
                                    </Th>
                                );
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((row) => {
                            return (
                                <TablesProjectRow
                                    key={row.name}
                                    name={row.name}
                                    logo={row.logo}
                                    status={row.status}
                                    budget={row.budget}
                                    progression={row.progression}
                                />
                            );
                        })}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default FrontPageTable;