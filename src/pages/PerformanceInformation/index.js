import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

import { Link, useLoaderData } from "react-router-dom";

import { InfoContainer, OrangeContainer } from "../../components";

import "./index.css";

// 인증키 : 6c245e6189d14bec93c11fd170ae8ca7

const PerformanceInformation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 먼저 localStorage에서 캐시된 데이터를 확인한다.
      // 속도를 빠르게 하기 위함.
      const cachedData = localStorage.getItem("performanceData");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/api/pblprfr?service=6c245e6189d14bec93c11fd170ae8ca7&stdate=20230601&eddate=20231231&cpage=1&rows=10&prfstate=02&signgucode=11&signgucodesub=1111&kidstate=Y"
        );
        const xmlData = response.data;

        parseString(xmlData, (err, result) => {
          if (err) {
            throw new Error("XML parsing error");
          }

          const jsonData = result;
          setData(jsonData);

          // 데이터를 캐싱합니다.
          localStorage.setItem("performanceData", JSON.stringify(jsonData));
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data.dbs.db);

  return (
    <>
      <OrangeContainer category={"공연 정보"} genre={"뮤지컬"}>
        <div className="information">
          {data.dbs.db.map((item, idx) => (
            <div key={idx} className="info-item">
              <Link
                to={`/detail/${item.mt20id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <InfoContainer title={item.prfnm[0]} imgsrc={item.poster[0]} />
              </Link>
            </div>
          ))}
        </div>
      </OrangeContainer>
    </>
  );
};

export default PerformanceInformation;
