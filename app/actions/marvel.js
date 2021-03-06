import MarvelService from "../services/Marvel";

const client = new MarvelService("characters");

export function getCharacters(name = "") {
  console.log(name)
    return dispatch => {
        return client.getCharacters(name).then(
            response => {
                dispatch({ type: `GET_CHARACTERS_SUCCESS`, characters: response.data.data.results});
            }
        ).catch((error) => {
            dispatch({ type: `GET_CHARACTERS_FAIL`, characters: {fudge: "sfsf"}});
        })
    }

}
export function updateSearch(name='')
{
    return({
        type: "UPDATE_SEARCH",
        name
    })
}