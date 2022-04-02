import React, { useState } from "react";
import Input from "../../components/Input";
import Table from "../../components/Table";
import ErrorCol from "../../components/Table/ErrorCol";
import SuccessCol from "../../components/Table/SuccessCol";
import { isValidYoutubeId } from "../../utils";

const Home = () => {
  const [state, setState] = useState({
    url: "",
    videos: [],
  });

  const handleChange = (e) => {
    setState({ ...state, url: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let idVideo = isValidYoutubeId(state.url);
    let res = await electron.sendVideo(idVideo);
    setState({ ...state, url: "", videos: [res, ...state.videos] });
  }

  const RenderRow = (video, key) => {
    if (video.status === "fail") {
      return <ErrorCol key={key} colspan="1" message={video.msg} />;
    } else {
      return <SuccessCol key={key} titre={video.title} link={video.link} />;
    }
  };

  return (
    <div>
      <div className="header-section">
        <p className="header-title">Entrez l'id ou le lien de la video</p>
        <div className="d-flex">
          <form onSubmit={handleSubmit}>
            <Input
              name="url"
              value={state.url}
              onChange={handleChange}
              color="red"
            />
          </form>
        </div>
      </div>

      <div className="media-table">
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col">Titre</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.videos.map((video, index) => RenderRow(video, index))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
