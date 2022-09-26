import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// display: grid; grid-template-columns: repeat(2, 1fr);
// -> 원 4개를 사각형 모양으로 배치
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
// place-self: center; -> 원 4개를 상자 가운데 배치
const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
// 속성(property) 이름은 마음대로 정하면 됨
// transition 속성은 animate 속성 안에 설정

// transition 타입:
// delayChildren: 자식 애니메이션이 이 시간(초) 후에 시작
// staggerChildren: 자식의 애니메이션에 이 시간(초)만큼 시차를 둠
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
// 부모 variants와 자식 variants의 속성 이름을 같게 설정   -> 이유는 아래 참조
const circleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function Variants() {
  return (
    // JS 객체로 생성한 variants를 해당 컴포넌트의 variants prop으로 설정
    // variants의 속성을 해당 컴포넌트의 initial prop, animate prop으로 설정

    // 부모 variants와 자식 variants의 속성 이름을 같게 설정하는 이유:
    // 자식 컴포넌트 props 설정시, 부모 컴포넌트의 initial과 animate prop 설정이 자식 컴포넌트에 그대로 상속됨
    // 따라서 자식 컴포넌트에는 initial과 animate prop 설정은 생략하고, variants prop만 설정하면 됨
    <Wrapper>
      <Box variants={boxVariants} initial="initial" animate="animate">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default Variants;
