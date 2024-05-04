import { useState, useEffect } from "react";
const Usefetch = (url) => {
  const [token, settoken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);
  const [loder, setloder] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(storedUserInfo);
    settoken(token);
    
    fetch(url)
      .then((response) => {
        if (response.status === 401) {
          seterror("not show fetch ");
          setloder(false);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setdata(result);
        setloder(false);
        seterror(null);
      })
      .catch((e) => {
        seterror(e.message);
        setloder(false);
      });
  }, [url]);
  return { data, loder, error, userInfo, token };
};

export default Usefetch;
