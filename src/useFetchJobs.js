import { useReducer, useEffect } from "react"
import axios from "axios"

    const ACTIONS = {
        MAKE_REQUEST : 'make-request',
        GET_REQUEST : 'get-request',
        ERROR : 'error'
    }
    const reducer = (state, action) => {
        switch(action.type){
            case ACTIONS.MAKE_REQUEST :
                return {
                    loading: true,
                    jobs: []
                }

            case ACTIONS.GET_REQUEST : 
                return {
                    ...state,
                    loading: false,
                    jobs : action.payload.jobs
                }

            case ACTIONS.ERROR : 
                return {
                    loading: false, 
                    error: action.payload.error, 
                    jobs : []
                }

            default:
                return state
        }
    }

    const API_KEY = '9143f549f9bb78477f36c2f5c01b3be9252763d7739a429b748db8d6e791048d'
    const BASE_URL = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs"

export default function useFetchJobs (params, page) {
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: false, error: false})

    useEffect(() => {
        dispatch({
            type: ACTIONS.MAKE_REQUEST,
        })
        axios.get(BASE_URL, {
            params: {
                q: 'frontend',
                engine: 'google_jobs',
                api_key: API_KEY,
                google_domain: "google.com",
                page: page,
                ...params
            }
        }).then( res => {
            dispatch({
                type: ACTIONS.GET_REQUEST,
                payload: {jobs : res.data}       
            })
            console.log(res.data)
        }).catch (err => {
            dispatch({
                type : ACTIONS.ERROR,
                payload : {error : err}
            })  
        })       
    }, [params, page])

    return state
}