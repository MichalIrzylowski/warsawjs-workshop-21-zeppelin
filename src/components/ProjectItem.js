import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import TagsList from './TagsList';

const ProjectItem = ({ project }) => {
  return (
    <Card>
      <Image src={`http://via.placeholder.com/260x175?text=${project.id}`} />
      <Card.Content>
        <Card.Header to={`projects/${project.id}`} as={Link} >
          {project.title}
        </Card.Header>
        <Card.Meta>

        </Card.Meta>
        <Card.Description>
          Nam odio orci, hendrerit a arcu at, cursus condimentum quam. Duis
          dictum lacinia tempor. Pellentesque id dolor vel nunc finibus
          accumsan. In sed lorem et erat congue ultricies laoreet non arcu.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <TagsList tags={project.tags} />
      </Card.Content>
    </Card>
  );
};

ProjectItem.defaultProps = {
  project: {}
};

export default ProjectItem;
