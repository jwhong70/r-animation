import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// motion.div 등으로 motion 컴포넌트 생성
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Animation() {
  return (
    <Wrapper>
      <Box
        // 초기 상태
        initial={{ scale: 0 }}
        // 움직임(CSS Transformation)
        animate={{ scale: 1, rotateZ: 360 }}
        // 추가 옵션
        transition={{ type: "spring", delay: 0.5 }}
      />
    </Wrapper>
  );
}
export default Animation;
