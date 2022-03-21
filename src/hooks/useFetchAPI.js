import { useState, useEffect } from "react";

export default function useFetchAPI(Endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // const Endpoint = "https://nnbphj.deta.dev/get";
    setIsLoading(true);
    console.log(isLoading);
    var myHeaders = new Headers();
    myHeaders.append("X-API-Key", "J58PETue.wUPK28VtZCNnCCVxbtoFM7-UrvAANSTQb");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const fetchScore = () => {
      fetch(Endpoint, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setApiData(JSON.parse(result)["allItems"]);
          console.log(localData);
          setIsLoading(false);
          console.log(isLoading);
        })
        .catch((err) => console.log(err));
    };

    fetchScore();

    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(Endpoint, {
    //         method: "get",
    //         headers: {
    //           "X-API-Key": "J58PETue.StrongAPIKeyGeneratedByDeta",
    //           "Content-Type": "application/json"
    //         }
    //       });
    //       const data = await response.json();
    //       console.log(data);
    //       setApiData(data);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   fetchData();
    // }, []);
  }, []);

  return { isLoading, apiData };
}
