import React from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

class NavElement extends React.Component {
    render() {
        return (
            <li><a href={`${this.props.src}?referrer=${window.location.href.split('?')[0]}`}>{capitalizeFirstLetter(this.props.name)}</a></li>
        );
    }
}

export class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {pages : this.props.pages};
    }

    render() {
        let listElements = [];
        this.state.pages.forEach( (pageItem) => {
            listElements.push(<NavElement key={pageItem.name} name={pageItem.name} src={pageItem.src}/>);
        });
        return (
            <div id={this.props.id}>
                <ul>
                    {listElements}
                </ul>
            </div>
        );
    }
}

