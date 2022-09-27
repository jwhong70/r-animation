import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValue() {
  // 애니메이션 값의 state와 속도를 추적하는 MotionValue 생성
  const x = useMotionValue(0);
  // 입력 범위를 출력 범위로 변환해 출력하는 MotionValue 생성
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  return (
    // motion 컴포넌트에 생성된 MotionValue를 style prop으로 설정
    // drag="x": x축 방향으로만 drag됨
    // dragSnapToOrigin: drag 후, 원래 위치로 돌아가기
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default MotionValue;
