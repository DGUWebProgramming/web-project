import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { DetailInfo, OrangeContainer } from "../../components";
import { recentPerformancesState, updateRecentPerformances } from "../../state";

import "./index.css";

// 인증키 : 6c245e6189d14bec93c11fd170ae8ca7
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const setRecentPerformances = useSetRecoilState(recentPerformancesState);

  useEffect(() => {
    const fetchData = async () => {
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

  useEffect(() => {
    if (data) {
      const performance = data.dbs.db[0];
      updateRecentPerformances(performance, setRecentPerformances);
    }
  }, [data, setRecentPerformances]);

  if (!data) {
    return (
      <OrangeContainer className="OrangeContainer" category={"공연 상세 정보"}>
        <div className="loading">
          <p className="loading-text">
            잠시만 기다려주세요.
            <br />
            공연 정보를 불러오고 있습니다!
          </p>
        </div>
      </OrangeContainer>
    );
  }

  return (
    <>
      <OrangeContainer category={"공연 상세 정보"}>
        <DetailInfo performance={data.dbs.db[0]} />
      </OrangeContainer>
    </>
  );
};

export default Detail;
