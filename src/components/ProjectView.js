import React from "react";
import ImageCommnets from "./ImageComments";
import SidebarComments from "../components/SidebarComments";
import Layout from "../components/Layout";
import ProjectSimilars from "./ProjectSimilars";

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<SidebarComments id={match.params.projectId} />}
    content={
      <div>
        <ImageCommnets id={match.params.projectId} />
      </div>
    }
    projectSimilars={<ProjectSimilars />}
  />
);

export default ProjectView;
