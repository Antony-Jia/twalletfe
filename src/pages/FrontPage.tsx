import WithSubnavigation from '../components/Navbar'
import SmallWithSocial from '../components/Footer'
import CallToActionWithAnnotation from "../components/HeroSection"
import SimpleThreeColumns from "../components/Features"
import SplitWithImage from "../components/Testimonials"
import FrontPageTable from '../components/FrontPage/FrontPageTable'
import { dashboardTableData } from '../components/variables/general'
import { Center, Box } from '@chakra-ui/react'
// import React, { useState, useEffect } from 'react';


function FrontPage() {

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const getPriceData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-CMC_PRO_API_KEY", "6e73ad78-792c-42bd-87a7-0b427480aa4f");

    var requestOptions : RequestInit  = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  const findAnyName = async () => {
    const urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/'];
    try {
      let res = await Promise.all(urls.map(e => fetch(e)))
      let resJson = await Promise.all(res.map(e => e.json()))
      resJson = resJson.map(e => e.results[0].name.first)
      console.log(resJson)
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const response = await fetch('https://api.example.com/data');
  //     const data = await response.json();
  //     setData(data);
  //     setLoading(false);
  //   };

  //   fetchData();

  //   // Set up a regular update interval
  //   const intervalId = setInterval(fetchData, 60000); // Update every 60 seconds

  //   // Clean up the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []);


  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithAnnotation />
      <Center>
        <Box w="60%" my="22px">
          <FrontPageTable
            title={"RealTime Price"}
            captions={["Companies", "Budget", "Status", "Completion", ""]}
            data={dashboardTableData}
          />
        </Box>
      </Center>
      <SimpleThreeColumns />
      <SplitWithImage />
      <SmallWithSocial />
    </Box>
  )
}

export default FrontPage