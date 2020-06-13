import styled from 'styled-components';
import { colors, metrics } from '~/styles';
// MAIN SECTION

export const Main = styled.main`
  width: 100%;
`;

export const Background = styled.div`
  background-color: ${colors.background};
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  justify-content: flex-end;

  z-index: -1;
`;

export const Img = styled.img`
  margin-right: 10rem;
  min-width: 1045px;
  min-height: 858px;
`;

export const LandingPage = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${metrics.headerHeight});
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  white-space: nowrap;
  font-size: 3rem;
  font-weight: ${metrics.ExtraBold};
  color: ${colors.primary};
  line-height: 1.2rem;
`;

export const SubTitle = styled.h3`
  color: ${colors.highlight};
`;

export const TitleContainer = styled.section`
  flex-direction: column;
  margin-left: 15rem;
  margin-bottom: 15rem;
  flex: 0;
`;

export const ProjectsPage = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ELAAbout = styled.section`
  margin-top: 2rem;
  width: 55%;
  height: auto;
  padding: 2rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  background-color: blue;
  justify-content: space-between;
  background-color: ${colors.highlight};
  border-radius: 5px;
  align-items: flex-start;
`;

export const TextContainer = styled.div`
  flex-direction: column;
  width: 40%;
`;

export const AboutTitle = styled.h3`
  color: ${colors.background};
  font-size: ${metrics.fontSizeSubtitle};
  font-weight: ${metrics.ExtraBold};
`;

export const AboutDescription = styled.p`
  width: 90%;
  color: ${colors.primary};
`;

export const VideoContainer = styled.div`
  width: 32rem;
  height: 16.69rem;
  border-radius: 5px;

  position: relative;
  bottom: 3rem;
  background-color: red;
`;

// PROJECTS

export const ProjectsContainer = styled.section`
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export const ProjectsTitle = styled.h3`
  font-size: ${metrics.fontSizeSubtitle};
  color: ${colors.highlight};
`;

export const ProjectsMenu = styled.section`
  margin-bottom: 2rem;
`;

// RevELA

export const RevElaAbout = styled.section`
  width: 100%;
  height: auto;
  background-color: ${colors.highlight};
  justify-content: center;
  align-items: center;
`;

export const RevVideoContainer = styled.div`
  width: 35rem;
  height: 19.69rem;
  border-radius: 5px;

  position: relative;
  bottom: 1rem;
  background-color: red;
  margin-right: 1rem;
`;

export const RevTextContainer = styled.div`
  padding: 1rem;
  padding-top: 2rem;
  flex-direction: column;

  width: 30%;
`;

export const RevElaTitle = styled.h3`
  color: ${colors.background};
  font-size: ${metrics.fontSizeSubtitle};
`;

export const RevElaDescription = styled.p`
  color: ${colors.primary};
`;
