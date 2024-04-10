import React, { Component } from 'react';
import Folder from './Folder';
import File from './File';

class MyBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootFolders: [],
      expandedFolders: new Set(props.expandedFolders),
      searchTerm: '',
      searchResults: []
    };
  }

  componentDidMount() {
    const { initialData } = this.props;
    const rootFolders = initialData.map((folderData) => this.buildFolder(folderData));
    this.setState({ rootFolders });
  }

  buildFolder(folderData) {
    const { name, children } = folderData;

    return (
      <Folder key={name} name={name} collapsed={!this.state.expandedFolders.has(name)}>
        {children.map((child) => {
          if (child.type === 'file') return <File key={child.name} name={child.name} />;
          else return this.buildFolder(child);
        })}
      </Folder>
    );
  }

  handleSearch = ({ target: { value } }) => {
    const { rootFolders } = this.state;
    const searchResults = [];
    rootFolders.forEach((folder) => this.findInFolder(folder, value, searchResults));
    this.setState({ searchTerm: value, searchResults });
  };

  findInFolder(folder, searchTerm, searchResults) {
    const {
      props: { name, children }
    } = folder;

    if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
      searchResults.push(folder);
    }
    React.Children.forEach(children, (child) => {
      if (child.type === Folder) {
        this.findInFolder(child, searchTerm, searchResults);
      } else if (child.type === File && child.props.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        searchResults.push({
          ...folder,
          props: {
            ...folder.props,
            children: folder.props.children.filter(({ type }) => type === File)
          }
        });
      }
    });
  }

  render() {
    const { rootFolders, searchTerm, searchResults } = this.state;
    const foldersToRender = searchTerm ? searchResults : rootFolders;

    return (
      <div>
        <input type='text' placeholder='Search...' value={searchTerm} onChange={this.handleSearch} />
        {foldersToRender}
      </div>
    );
  }
}

export default MyBrowser;
