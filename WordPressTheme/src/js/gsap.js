import gsap from '../../node_modules/gsap/all.js';
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

// タイムラインアニメーションの発火
window.addEventListener("DOMContentLoaded", async () => {
    const stagger = 0.05;

    gsap.utils.toArray(".make").forEach((el) => {
      const q = gsap.utils.selector(el);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            toggleActions: "play none none reset",
          },
        })
        .fromTo(
          // あしらいとしての矩形
          q(".headline .rect"),
          {
            x: "-100%",
          },
          {
            x: "100%",
            duration: 1,
            stagger,
            ease: "power3.inout",
          },
        )
        .fromTo(
          q(".headline .label"),
          {
            alpha: 0,
          },
          {
            alpha: 1,
            duration: 0.3,
            delay: 0.5,
            stagger,
          },
          "<",
        )
        .fromTo(
          q(".slideX"),
          {
            alpha: 0,
            x: -32,
          },
          {
            alpha: 1,
            x: 0,
            duration: 0.75,
            delay: 0.2,
            stagger,
            ease: "power3.out",
          },
          "<",
        );
    });
  });

  gsap.from(".c-box", {rotation: 27,
    x: 800,//右に何px移動するか
    stagger: 0.5,//次の要素が動き始めるまでの感覚の時間
    backgroundColor: "blue",//背景色が変わる
    repeat: -1,//リピート回数　-1は無限
    repeatDelay: 5,//リピートするまでの時間
    yoyo: true,//動きがヨーヨーみたいに戻る
    duration: 1//動きの時間
  });

  // タイピングアニメーションの発火
  function initTypeAnim() {
    ityped.init(document.querySelector(".ityped"), {
      strings: ["ひよこ豆とアボガドのタコス"], //表示させたい文字の設定 区切りはカンマ
      startDelay: 0, //アニメーション開始までの遅延、大きいほど遅れる
      typeSpeed: 120, //表示させるスピード、大きいほどゆっくり
      loop: false, //ループ
      backSpeed: 80, //戻るスピード
      backDelay: 150, //戻る時間指定
      showCursor: true, //カーソル表示
      cursorChar: "|", //カーソルとして表示するテキスト
      contentType: 'html'
    });
  }
  ScrollTrigger.create({
    trigger: ".ityped",
    start: "top 90%",
    onEnter: initTypeAnim,
    once: true,
  });

  gsap.from('.js-demo-right', { //アニメーションしたい要素を指定
    x: 800, //横に800px動かす
    stagger: 1,
    scrollTrigger: {
      trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
      start: 'top center' //アニメーションが始まる位置を指定
    }
  });

  gsap.from('.material_right', { //アニメーションしたい要素を指定
    x: 800, //横に800px動かす
    stagger: 1,
    scrollTrigger: {
      trigger: '.js-demo',//アニメーションが始まるトリガーとなる要素
      start: 'top center' //アニメーションが始まる位置を指定
    }
  });

  // スクラブアニメーション

  ScrollTrigger.create({
    trigger: ".bottom",
    start: "top 50%",
    toggleClass: "is-crossed",
  });
  const bottomTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".bottom",
      start: "top bottom",
      end: "center center",
      scrub: 1,
    },
  });
  bottomTl
    .fromTo(
      ".js-bottom_left",
      {
        xPercent: -100,
      },
      { xPercent: 0 }
    )
    .fromTo(
      ".js-bottom_right",
      {
        xPercent: 100,
      },
      { xPercent: 0 },
      "<"
    );

  // スクラブアニメーション　ここまで

  gsap.config({
    nullTargetWarn: false,
  });


  const wrapper = document.querySelector('#wrapper');
  if(wrapper) {
      // gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
      const panels = gsap.utils.toArray('.js-panel');
      const wrapperWidth = wrapper.offsetWidth;
      /**
      * 横スクロール開始
      */
      gsap.to( panels, {
          xPercent: -100 * (panels.length - 1), // transformX
          ease: "none", // easingの設定
          scrollTrigger: { // scrollTrigger
              trigger: wrapper, // アニメーションの対象となる要素
              pin: true, // 要素を固定する
              scrub: 1, // スクロールとアニメーションを同期させる。数値で秒数の設定に
              end: () => "+=" + wrapperWidth // アニメーションの終了タイミング
          }
      })
  }

  var frame_count  = 154,
  offset_value = 170;

gsap.to(".p-bird__img", {
backgroundPosition: (-offset_value * frame_count) + "px 50%",
ease: "steps(" + frame_count + ")",
onComplete: () => {
  document.getElementById("img").classList.add("item");
},
scrollTrigger: {
  trigger: ".p-bird",
  start: "top top",
  end: "+=" + (frame_count * offset_value),
  pin: true,
  repeat: 1,
  scrub: true
}
});









