import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

// Wrapper 컴포넌트에 gradient 애니메이션을 주기 위해 motion 컴포넌트로 변경
// Wrapper 컴포넌트를 height: 100vh로 설정하면, Progress가 작용 안함
const Wrapper = styled(motion.div)`
  height: 200vh;
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

function Scroll() {
  // 애니메이션 값의 state와 속도를 추적하는 MotionValue 생성
  const x = useMotionValue(0);
  // 입력 범위를 출력 범위로 변환해 출력하는 MotionValue 생성
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  // viewport가 scroll될 때, 업데이트되는 MotionValue 생성
  // scrollYProgress: 0~1 사이의 수직 scroll 진행률
  const { scrollYProgress } = useScroll();
  // 입력 범위를 출력 범위로 변환해 출력하는 MotionValue 생성
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    // motion 컴포넌트에 생성된 MotionValue를 style prop으로 설정
    // drag="x": x축 방향으로만 drag됨
    // dragSnapToOrigin: drag 후, 원래 위치로 돌아가기
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default Scroll;
