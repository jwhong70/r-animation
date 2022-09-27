import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 180px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
// motion을 적용할 컴포넌트에 initial, animate, exit prop을 설정
// 컴포넌트가 사라질 때 적용할 애니메이션을 exit prop으로 설정

// custom prop: variants에 데이터를 보낼 수 있게 해주는 속성
// custom prop을 사용하려면, 객체를 리턴하는 함수로 variants를 바꿔야 함
// -> 함수는 ( argument ) => ( { } )의 형태로 작성
// -> argument는 custom prop으로부터 전달됨
const box = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  animate: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

function Slide() {
  const [visible, setVisible] = useState(1);
  // custom prop를 적용하기 위해 back 상수 생성
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((current) => (current === 10 ? 10 : current + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((current) => (current === 1 ? 1 : current - 1));
  };

  return (
    <Wrapper>
      {/* AnimatePresence의 규칙: */}
      {/* #1 visible 상태이어야 함 */}
      {/* #2 <AnimatePresence>의 자식 요소로 삼항 연산자가 있어야 함 */}
      {/* #3 삼항 연산자 안에는 motion을 적용할 사라지는 컴포넌트가 있어야 함 */}

      {/* motion을 적용할 컴포넌트에 initial, animate, exit prop을 설정 */}

      {/* custom prop을 사용하려면: */}
      {/* #1 custom prop을 설정하는 컴포넌트 뿐만 아니라, */}
      {/* #2 AnimatePresence에도 custom prop를 설정해야 함 */}
      {/* back 상수를 custom prop으로 설정 */}

      {/* key 값 변경 코드 생성: */}
      {/* key prop 값으로 visible을 설정 */}
      {/* React는 key 값이 바뀌면, 그 컴포넌트가 사라졌다고 판단함 */}
      {/* React가 컴포넌트가 사라졌다고 판단하면: /}
      {/* #1 이전 컴포넌트에 대해 exit를 실행하고, */}
      {/* #2 리렌더링을 실시하면서, */}
      {/* #3 새로운 컴포넌트에 initial, animate를 모두 실행함 */}
      {/* 이 방식은 key 값 변경이 exit의 trigger 역할을 하므로, */}
      {/* 코드 작성시 삼항연산자를 사용하지 않아도 됨 */}
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="initial"
          animate="animate"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}
export default Slide;
