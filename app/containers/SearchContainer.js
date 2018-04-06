import { connect } from 'react-redux'
import SearchPage from '../components/SearchPage'
import { updateSearch } from "../actions/marvel";

const mapStateToProps = state => {
  return { 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: (name) => dispatch(updateSearch(name))
  }
}

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

export default SearchPageContainer