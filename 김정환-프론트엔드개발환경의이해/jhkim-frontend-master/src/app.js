//import * as math from './math.js';
import "./app.scss"; //  app.scss를 불러올 수 있도록 웹팩 구성을 추가.
//import defaultImage from "./images/icon.png";
import axios from "axios";
//import form from "./form";

// // 엔트리/아웃풋 예제
// console.log(math.sum(1,2));

let form, formEl;

document.addEventListener("DOMContentLoaded", async () => {
  // // 로더 예제
  // document.body.innerHTML = `<img src="${defaultImage}"/>`

  // API 서버 연동 예제
  const res = await axios.get("/api/keywords");
  console.log(res);
  document.body.innerHTML = (res.data || [])
    .map((keywords) => {
      return `<div>${keywords.keyword}</div>`;
    })
    .join("");

  // // 핫 모듈 예제
  // formEl = document.createElement("div");
  // formEl.innerHTML = form.render();
  // document.body.appendChild(formEl);

  // 다이나믹 임포트 예제
  import(/* webpackChunkName: "form" */ "./form.js").then((m) => {
    form = m.default;
    formEl = document.createElement("div");
    formEl.innerHTML = form.render();
    document.body.appendChild(formEl);
  });
});

// // 플러그인 예제
// console.log(process.env.NODE_ENV);
// console.log(TWO);
// console.log(api.domain)

// 핫로딩 예제
if (module.hot) {
  console.log("핫 모듈 켜짐");
  module.hot.accept("./form", () => {
    console.log("form 모듈 켜짐");
    formEl.innerHTML = form.render();
  });
}
