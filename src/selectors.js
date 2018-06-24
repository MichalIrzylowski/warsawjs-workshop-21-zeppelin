import { createSelector } from "reselect";
import { intersection, flatten, uniq, flow, sortBy, uniqBy } from "lodash";



export const getProject = (state, props) => state.projects.data[props.id - 1] || {}
export const getShops = state => state.shops;
export const getSelectedtags = state => state.selectedtags;
export const getSelectedPoint = state => state.selectedPoint;
export const getProjectsOrder = state => state.projects.order;
export const getProjectsEntities = state => state.projects.entities;
export const getSimilars = state => state.similars;
export const isAppLoading = state => state.isAppLoading;
export const isProjectsLoading = state =>
  isAppLoading(state) || state.projects.loading;

export const getProjectPoints = createSelector(getProject, project => {
  const { comments = [] } = project;
  const points = comments.map(({ x, y }) => ({ x, y }));
  const uniqPoints = uniqBy(points, ({ x, y }) => `${x}-${y}`);
  return uniqPoints;
});

export const getFiltredComments = createSelector(getProject, getSelectedPoint, (project, point) => {
    console.warn({ point });
    const { comments = [] } = project;
    if (!point) return comments;
    const filterdComments = comments.filter(
      ({ x, y }) => `${x}-${y}` === `${point.x}-${point.y}`
    );
    return filterdComments;
  }
);
