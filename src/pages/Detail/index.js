import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

import { useParams } from "react-router-dom";

import { DetailInfo, OrangeContainer } from "../../components";

import "./index.css";

// 인증키 : 6c245e6189d14bec93c11fd170ae8ca7
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 먼저 localStorage에서 캐시된 데이터를 확인합니다.
      const cachedData = localStorage.getItem(`performanceDetail-${id}`);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3000/api/pblprfr/${id}?service=6c245e6189d14bec93c11fd170ae8ca7`
        );
        const xmlData = response.data;

        parseString(xmlData, (err, result) => {
          if (err) {
            throw new Error("XML parsing error");
          }

          const jsonData = result;
          setData(jsonData);

          // 데이터를 캐싱합니다.
          localStorage.setItem(
            `performanceDetail-${id}`,
            JSON.stringify(jsonData)
          );
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data.dbs.db);

  return (
    <>
      <OrangeContainer category={"공연 상세 정보"}>
        <DetailInfo performance={data.dbs.db[0]} />
      </OrangeContainer>
    </>
  );
};

export default Detail;
