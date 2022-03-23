import { useState, useEffect } from "react";

export default function useFetchAPI(endpoint) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("X-API-Key", "kogPTe5m.eo5PBom34FAQs6GQnZKM4W-HE1WB2eBeE");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://um41uj.deta.dev/${endpoint}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        setApiData(JSON.parse(result));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isLoading, apiData };
}
