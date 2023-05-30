import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { OrangeContainer } from "../../components";

import "./index.css";

const Main = () => {
  return (
    <>
      <OrangeContainer category={"공연 정보"}>
        AAAAAAAAAAAAA흰색 컨테이너 영역 스크롤 가능 여부 테스트 문구 입니다.
        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ACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAAAAAAEhJvAAAAAAAAAAAAAAAAJCTeAAAAAAAAAAAAAAAASEi8AQAAAAAAAAAAAAAAkJB4AwAAAAAAAAAAAAAAICHxBgAAAAAAAAAAAAAAQELiDQAAAAAAAAAAAAAAgITEGwAAAAAAAAAAAAAAAAmJNwAAAAAAAAAAAAAAABISbwAAAAAAAAAAAAAAACQk3gAAAAAAAAAAAAAAAEhIvAEAAAAAAAAAAAAAAJCQeAMAAAAAAAAAAAAAACAh8QYAAAAAAAAAAAAAAEBC4g0AAAAAAAAAAAAAAICExBsAAAAAAAAAAAAAAAAJiTcAAAAAAAAAAAAAAAASEm8AAAAAAAAAAAAAAAAkJN4AAAAAAAAAAAAAAABISLwBAAAAAAAAAAAAAACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAAAAAAEhJvAAAAAAAAAAAAAAAAJCTeAAAAAAAAAAAAAAAASEi8AQAAAAAAAAAAAAAAkJB4AwAAAAAAAAAAAAAAICHxBgAAAAAAAAAAAAAAQELiDQAAAAAAAAAAAAAAgITEGwAAAAAAAAAAAAAAAAmJNwAAAAAAAAAAAAAAABISbwAAAAAAAAAAAAAAACQk3gAAAAAAAAAAAAAAAEhIvAEAAAAAAAAAAAAAAJCQeAMAAAAAAAAAAAAAACAh8QYAAAAAAAAAAAAAAEBC4g0AAAAAAAAAAAAAAICExBsAAAAAAAAAAAAAAAAJiTcAAAAAAAAAAAAAAAASEm8AAAAAAAAAAAAAAAAkJN4AAAAAAAAAAAAAAABISLwBAAAAAAAAAAAAAACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAAAAAAEhJvAAAAAAAAAAAAAAAAJCTeAAAAAAAAAAAAAAAASEi8AQAAAAAAAAAAAAAAkJB4AwAAAAAAAAAAAAAAICHxBgAAAAAAAAAAAAAAQELiDQAAAAAAAAAAAAAAgITEGwAAAAAAAAAAAAAAAAmJNwAAAAAAAAAAAAAAABISbwAAAAAAAAAAAAAAACQk3gAAAAAAAAAAAAAAAEhIvAEAAAAAAAAAAAAAAJCQeAMAAAAAAAAAAAAAACAh8QYAAAAAAAAAAAAAAEBC4g0AAAAAAAAAAAAAAICExBsAAAAAAAAAAAAAAAAJiTcAAAAAAAAAAAAAAAASEm8AAAAAAAAAAAAAAAAkJN4AAAAAAAAAAAAAAABISLwBAAAAAAAAAAAAAACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAAAAAAEhJvAAAAAAAAAAAAAAAAJCTeAAAAAAAAAAAAAAAASEi8AQAAAAAAAAAAAAAAkJB4AwAAAAAAAAAAAAAAICHxBgAAAAAAAAAAAAAAQELiDQAAAAAAAAAAAAAAgITEGwAAAAAAAAAAAAAAAAmJNwAAAAAAAAAAAAAAABISbwAAAAAAAAAAAAAAACQk3gAAAAAAAAAAAAAAAEhIvAEAAAAAAAAAAAAAAJCQeAMAAAAAAAAAAAAAACAh8QYAAAAAAAAAAAAAAEBC4g0AAAAAAAAAAAAAAICExBsAAAAAAAAAAAAAAAAJiTcAAAAAAAAAAAAAAAASEm8AAAAAAAAAAAAAAAAkJN4AAAAAAAAAAAAAAABISLwBAAAAAAAAAAAAAACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAAAAAAEhJvAAAAAAAAAAAAAAAAJCTeAAAAAAAAAAAAAAAASEi8AQAAAAAAAAAAAAAAkJB4AwAAAAAAAAAAAAAAICHxBgAAAAAAAAAAAAAAQELiDQAAAAAAAAAAAAAAgITEGwAAAAAAAAAAAAAAAAmJNwAAAAAAAAAAAAAAABISbwAAAAAAAAAAAAAAACQk3gAAAAAAAAAAAAAAAEhIvAEAAAAAAAAAAAAAAJCQeAMAAAAAAAAAAAAAACAh8QYAAAAAAAAAAAAAAEBC4g0AAAAAAAAAAAAAAICExBsAAAAAAAAAAAAAAAAJiTcAAAAAAAAAAAAAAAASEm8AAAAAAAAAAAAAAAAkJN4AAAAAAAAAAAAAAABISLwBAAAAAAAAAAAAAACQkHgDAAAAAAAAAAAAAAAgIfEGAAAAAAAAAAAAAABAQuINAAAAAAAAAAAAAACAhMQbAAAAAAAAAAAAAAAACYk3AAAAAAAAAAAA6uDYL54/5Y/3hw7GzwAAAJqVeAMAAAAAAAAAAOAMHB98JRzZvze8vXt7+M13bwmvb7wp/OqGL3/84/XvrD3ljwPrln/8Oa/d/vXh/25o53fDoR89PBx3AAAA5SfeAAAAAAAAAAAAOIUs1shCjSy2+JfV/3t47fYbwsF7vh3e2r0tHH7uJ+HYS/vjZ56544MvD/93h364KwztuGc47jgZdWRBRxaHnDh6OH42AABQFuINAAAAAAAAAACAKIsn3njgTz+ONbJQI4stThx5N35GGlnUkQUdWRzyL//tvwzHHNnNHO8PHYyfAQAAFJl4AwAAAAAAAAAAaGrZDRsng40snnhn7+PJY43TyWKO7GaOA+uWD9/88c6+x+MrAABAEYk3AAAAAAAAAACAppQFEVkYkd2w0QjBRi3ZzR9vfP+juOTt3dvdxgEAAAUk3gAAAAAAAAAAAJpKFm0Mrl8+HERkYURRZHHJW7u3Dd/Gkd0UIuIAAIDiEG8AAAAAAAAAAABN4cj+vR9HG++9WezwIbspJIs4hnZ+N5w4ejjuAgAAjUq8AQAAAAAAAAAAlNrxwVfC6xtvCgfv+Xbho43POvTDXeHAuv8aDv3o4bgDAAA0IvEGAAAAAAAAAABQStmNFNnNFK/dfkM49tL+uFs+J468G4Z23PPh/59fHw5VAACAxiPeAAAAAAAAAAAASieLGF67/WvDN1M0i+ODLw+HKm/v3h53AACARiHeAAAAAAAAAAAASiWLF7KI4b03D8ad5vLW7m3Dt3C8P9Sc//8DAEAjEm8AAAAAAAAAAAClcOLo4fD6xpuG44Vml93C8a+33xCO7N8bdwAAgLEk3gAAAAAAAAAAAArv+OAr4bXbvxaOvbQ/7nDiyLvh4D3fDod+9HDcAQAAxop4AwAAAAAAAAAAKLQs3Hh949rw3psH4w6fNrTjnvDGA38aJwAAYCyINwAAAAAAAAAAgMJ6Z9/j4bXbbxi+ZYLa3tn7ePjNd28JJ44ejjsAAECexBsAAAAAAAAAAEAhZeHGG993o8SZOvzcT8Lr31kr4AAAgDEg3gAAAAAAAAAAAApHuDE6xwdfFnAAAMAYEG8AAAAAAAAAAACFItw4O1nA8cb374wTAACQB/EGAAAAAAAAAABQGMKN+jj83E/CGw/4eQQAgLyINwAAAAAAAAAAgEIQbtTXO3sfD2/v3h4nAAAgJfEGAAAAAAAAAADQ8IQbaby1e1s4sn9vnAAAgFTEGwAAAAAAAAAAQEMTbqT179+/M7w/dDBOAABACuINAAAAAAAAAACgYQk30jtx5N1w8J5b4gQAAKQg3gAAAAAAAAAAABqScCM/xwdfDm/v3h4nAACg3sQbAAAAAAAAAABAwxFu5O+t3dvCsV88HycAAKCexBsAAAAAAAAAAEBDEW6MnaEH74krAACgnsQbAAAAAAAAAABAwxBujK3jgy+Ht3dvjxMAAFAv4g0AAAAAAAAAAKAhCDcaw3/8aFc4cfRwnAAAgHoQbwAAAAAAAAAAAGNOuNE4Thx5Nwzt+LM4AQAA9SDeAAAAAAAAAAAAxpRwo/Omn8yl2X92+MIx9q65s9/C7SbX1z4g4AqQk3yJNwo/66rlk1fGNZFsDyib+98kt7xrW09MURAAAKRbwBAAAAAAAAdTJpXOsljyz9/Z1x5EPD4cZm4QZAnoQb5Em4kU52Y1kWwAo4PtFTmTj1zxf17mkJoStuAQBAYYg3AAAAAAAAoA6yA2R/tuD8ndmBsrjV9LKDnFm40VqZEncASE24QZ6EG+llAexHN5jNjjtc3Tt1/tf7pt0XRwAAKAzxBgAAAAAAANRBdoAsO0gWx6aXHeTMDnQKNwDyI9wgT8KN/AwHHMM3mQk4TtpyWc/qGR0T18QRAAAKQbwBAAAAAAAAZ2lu16RbswNkcWx60wbWDR/oBCA/wg3yJNzIXxbEZgFH+9wFcYcnl8/aMWlc6yVxBACAhifeAAAAAAAAgLOQHRjbc+XMe+PY9Lpv3hLOGVgfJwDyINwgT8KNsTMccNy1w8//p+z8gxl7WkLoiiMAADQ08QYAAAAAAACMUnZQLDswFseml4UbncscJgTIk3CDPAk3GoOvwycuPbcy449nV3fGEQAAGpp4AwAAAAAAAEYpOyiWHRiLY9Nqndwh3AAYA8IN8iQYaCy+Hp+47eLu6+Z2Tbo1jgAA0LDEGwAAAAAAADAK2QGx7KBYHJtWFm703rVDuAGQM+EGeRIKNKbs65IFtISw58qZ904a13pJHAEAoCGJNwAAAAAAAGCEsoNh2QGxODatk+FGW9+cuANAHoQb5Em40diygFbA8ZGdfzBjT0sIXXEEAICGI94AAAAAAACAEcgOhGUHw+LYtIQbAGNDuEGehBvFIOD4yKXnVmb88ezqzjgCAEDDEW8AAAAAAADACHy9b9p92cGwODYl4QbA2BBukCfhRrEIOD5y28Xd183omLgmjgAA0FDEGwAAAAAAAHCGqpPGr9xyWc/qODYl4QbA2BBukCfhRjEJOD7y0B/03TeupaUvjgAA0DDEGwAAAAAAAHAGsgNgjyz9/Z1xbErCDYCxIdwgT8KNYhNwhNBTmTj1zxf17okjAAA0DPEGAAAAAAAAnIE/+d/O25kdBItj0xFuAIwN4QZ5Em6Ug4AjhKt7p85fXK1siiMAADQE8QYAAAAAAACcxtyuSbeunlldEssyWErjgCAMCYEm8AAAAAAADA58gOfMVlU703zV8Uu2K5ZmbTxX964bSVsQUAgDEhvAEAAAAAAADv8snmppVfmDP96tgWShjknPGlxbEDoBoEN6gmwY1i+8DX7s0aWi+LXbE89EcXfWNa/fiFsQUAgKoT3gAAAAAAAIC3GT9uXOtjn77k7tgWShjkDAOdAFSP4AbVJLhBXdPUbM49jxY2wPGDT11U2O16AACMPeENAAAAAAAAeJtvfWxWIQe6wgCf4AZAdQluUE2CG7wpBDg++M2/z+omT4knxXHNzKaLw5a92AIAQFUJbwAAAAAAAEB0xYxJy5dc2nxtbAsjBDfCDcwAVI/gBtUkuMG71c9qyeZ859FCBjjClr1J4+vmxhYAAKpGeAMAAAAAAABOGJdlMx7+o4sKdwtvGNgbuXm5aWo8AaDSBDeoJsEN3ktD6+Un/vdxb+yK5W+var4/lgAAUDXCGwAAAAAAAHDC/+Oy5tUtTROnx7YQQnAj3Lgcbl4GoDoEN6gmwQ1OZcqC67Lmpd+MXXGEbXth615sAQCgKoQ3AAAAAAAAKLxp9eMX/s1Vsws32di87FsjNy4DUB2CG1ST4Aana8aXFhfyfyth617YvhdbAACoOOENAAAAAAAACu8Hn7po
      </OrangeContainer>
    </>
  );
};

export default Main;
