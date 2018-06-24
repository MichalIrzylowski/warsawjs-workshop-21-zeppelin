import React from 'react';
import {connect} from 'react-redux';
import {Segment, Header, Card} from 'semantic-ui-react';
import ProjectItem from './ProjectItem';


const ProjectList = ({projects, loading}) => (
  <div>
    <Segment clearing vertical basic>
      <Header as='h1'>
        Dostępne projekty aplikacji:
      </Header>
      <Card.Group>
        {projects.map( item => <ProjectItem key={item.id} project={item} />)}
      </Card.Group>
    </Segment>
  </div>
)

const mapStateToProps = (reduxState, ownProps) => {
  return {
    projects: reduxState.projects.data,
    isLoading: reduxState.isAppLoading
  }
}

export default connect(mapStateToProps)(ProjectList);
