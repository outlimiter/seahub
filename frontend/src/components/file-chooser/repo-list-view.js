import React from 'react';
import PropTypes from 'prop-types';
import RepoListItem from './repo-list-item';

const propTypes = {
  repo: PropTypes.object,
  repoList: PropTypes.array,
  selectedRepo: PropTypes.object,
  initToShowChildren: PropTypes.bool.isRequired,
  selectedPath: PropTypes.string,
  onDirentItemClick: PropTypes.func.isRequired,
  onRepoItemClick: PropTypes.func.isRequired,
};

class RepoListView extends React.Component {

  render() {
    let { repo, repoList } = this.props;
    if (repo) {
      repoList = [];
      repoList.push(repo);
    }
    return (
      <ul className="list-view-content file-chooser-item">
        {repoList.length > 0 && repoList.map((repoItem, index) => {
          return (
            <RepoListItem 
              key={index} 
              repo={repoItem}
              initToShowChildren={this.props.initToShowChildren}
              selectedRepo={this.props.selectedRepo}
              selectedPath={this.props.selectedPath}
              onRepoItemClick={this.props.onRepoItemClick} 
              onDirentItemClick={this.props.onDirentItemClick}
            />
          );
        })}
      </ul>
    );
  }
}

RepoListView.propTypes = propTypes;

export default RepoListView;
