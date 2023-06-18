import React, { useEffect } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { Text } from "../../components";
import { Header } from "../../components";

import o1 from "../../asset/images/on-1.png";
import o2 from "../../asset/images/on-2.png";
import p1 from "../../asset/images/on-ti.png";
import p2 from "../../asset/images/on-pe.jpg";
import o3 from "../../asset/images/on-per.png";
import os from "../../asset/images/on-start.png";
import d1 from "../../asset/images/1.png";
import d2 from "../../asset/images/2.png";
import d3 from "../../asset/images/3.png";
import d4 from "../../asset/images/4.png";
import title from "../../asset/images/text-logo.svg";
import "./index.css";

const OnBoarding = () => {
  const element = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transition = "opacity 0.5s";
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transition = "opacity 0.5s";
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
    });
    Array.prototype.forEach.call(element.current.children, (child) => {
      observer.observe(child);
    });
  }, []);

  return (
    <>
      <Header />
      <div ref={element} className="onboarding-container">
        <div className="box1">
          <img className="img" src={o1} alt={"onbording_image"} />
          <div>
            <div className="intro">
              문화 생활 시작의 발걸음
              <br />
              <img className="text-logo" src={title} alt={"logo"} />
              <span>에서</span>
              <br />
              힘차게 내딛어 보세요!
            </div>
          </div>
        </div>
        <div className="box2">
          <div>
            <Text styleClass="text1">
              무한도전은
              <br /> 문화생활을 함께 해줄 동반자 서비스 입니다
            </Text>
            <Text styleClass="text2">
              다양한 공연 정보 탐색부터
              <br />
              직접 티켓팅을 해보고 실력을 키울 수 있는 연습까지.
              <br />
              무한도전에서는 능동적으로 문화생활을 시작 할 수 있습니다.
            </Text>
          </div>
          <img className="img-2" src={o2} alt={"onbording_image"} />
        </div>
        <div className="box3">
          <div>
            <Text styleClass="text3">티켓팅 연습</Text>
            <Text styleClass="text1">
              좌석 위치를
              <br />
              한눈에
            </Text>
            <Text styleClass="text2">
              원하는 난이도와 좌석 형태를 선택하고
              <br />
              티켓팅 연습을 해볼 수 있어요.
            </Text>
          </div>
          <div>
            <img className="img-ti" src={p1} alt={"onbording_image"} />
          </div>
        </div>
        <div className="box4">
          <div className="margin-top">
            <Text styleClass="text3">공연 정보</Text>
            <Text styleClass="text1">
              다양한 공연 정보를
              <br />
              둘러볼 수 있어요.
            </Text>
            <Text styleClass="text2">
              뮤지컬, 연극, 콘서트 카테고리에서 최신 공연 정보를 둘러보고,
              <br />
              포스터 사진을 눌러 자세한 내용을 알아볼 수 있어요.
            </Text>
          </div>
          <div>
            <img className="img2" src={p2} alt={"capture_image"} />
          </div>
        </div>
        <div className="box5">
          <div className="margin-top">
            <Text styleClass="text3">통계</Text>
            <Text styleClass="text1">
              도전한 티켓팅 횟수를
              <br />
              한눈에 볼 수 있어요.
            </Text>
            <Text styleClass="text2">
              지금껏 도전한 티켓팅 시도 횟수를 알아보고, 성공한 횟수를 한눈에 볼
              수 있어요.
              <br />
              점차 늘어가는 실력을 확인하고 뿌듯함을 느껴보세요!
            </Text>
          </div>
          <div>
            <img className="img2" src={o3} alt={"capture_image"} />
          </div>
        </div>
        <div className="box4">
          <div className="margin-top">
            <Text styleClass="text3">만든 사람들</Text>
            <Text styleClass="text1">
              무한도전 서비스를 기획하고,
              <br />
              제작한 사람들을 알아볼까요?
            </Text>
          </div>
          <div className="developer">
            <div>
              <img src={d1} alt="이은학" />
              <Text styleClass="text4">이은학</Text>
              <Text>의생명공학과</Text>
            </div>
            <div>
              <img src={d2} alt="박혜림" />
              <Text styleClass="text4">박혜림</Text>
              <Text>사학과</Text>
            </div>
            <div>
              <img src={d3} alt="안도영" />
              <Text styleClass="text4">안도영</Text>
              <Text>컴퓨터공학과</Text>
            </div>
            <div>
              <img src={d4} alt="이주현" />
              <Text styleClass="text4">이주현</Text>
              <Text>멀티미디어공학과</Text>
            </div>
          </div>
        </div>
        <div className="box6">
          <div className="margin-top">
            <Text styleClass="text3">시작해볼까요?</Text>
            <Text styleClass="text1">
              무한도전의 세계로
              <br />한 걸음
            </Text>
            <Text styleClass="text2">
              아이콘을 클릭하면 티켓팅 페이지가 시작됩니다!
            </Text>
          </div>
          <div>
            <Link to="/ticketing">
              <img className="img-st" src={os} alt={"capture_image"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
