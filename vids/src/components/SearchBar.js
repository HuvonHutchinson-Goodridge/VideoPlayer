import React from 'react'

class SearchBar extends React.Component{

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term) 
    };
    state = { term: ''}
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit= {this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            text="text"
                            value={this.state.term}
                            onChange = {this.onInputChange} />
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;