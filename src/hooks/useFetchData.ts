import { useEffect, useState } from "react";
import axiosInstance from "../api/base";


const useFetchData = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(200);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await axiosInstance.get('/home');
        if (res) {
          setData(res)
        }
        setLoading(false);
        // if (res.count && params.size && pages) {
        //   setPages(Math.ceil(res.count / params.size));
        // }
      } catch (e) {
        setLoading(false)
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);
  return { data, loading, pages, status };
};
export default useFetchData;
