import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// drag 영역을 제한하기 위한 Box 생성
// display: flex; justify-content: center; align-items: center;
// -> 자식 요소를 중앙에 배치
// overflow: hidden;
// -> BiggerBox 컴포넌트 영역을 벗어난 Box 컴포넌트 부분은 안보임
const BiggerBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
// color: 숫자값인 rgb나 rgba로 설정해야 애니메이션 설정 가능
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  whileHover: { rotateZ: 90 },
  whileTap: { borderRadius: "100px" },
};

function Drag() {
  // useRef로 BiggerBox를 선택할 biggerBoxRef 생성
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    // BiggerBox 컴포넌트를 biggerBoxRef를 ref prop로 설정
    // -> useRef를 사용해 BiggerBox 컴포넌트 크기에 맞춰 drag 제약

    // drag 동작: axis-locking, drag constraints, gesture-ending transition으로 구성
    // axis-locking: drag -> drag 활성화. 어떤 방향으로도 drag됨
    // drag constraints: biggerBoxRef, 즉 BiggerBox 컴포넌트로 영역 제약
    // gesture-ending transition:
    // dragSnapToOrigin -> drag 후, 원래 위치로 돌아가기
    // dragElastic -> 탄성(마우스를 잡아 당기는 힘)을 설정
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        />
      </BiggerBox>
    </Wrapper>
  );
}
export default Drag;
