import config from "./config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Index";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
 
  const estilosDaHomePage = {

  };

  const valorDoFiltro = "Angular"


  return (
    <>
    <CSSReset />
    <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
      <Menu />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
    </div>
    </>
      );
}

export default HomePage;



const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-itens: center;
    width: 100%;
    padding: 2% 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...propriedades}) {
  console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                return video.title.includes(searchValue)
              }).map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
