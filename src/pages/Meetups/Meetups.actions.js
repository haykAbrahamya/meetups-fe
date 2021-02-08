import { toast } from 'react-toastify'


import { MEETUPS_TYPES } from './Meetups.types'
import { setLoading } from '../../common/app/app.actions'
import { FetchApi } from '../../helpers/FetchApi'


export const loadMeetups = () => async dispatch => {
  try {
    dispatch(setLoading(true))
    const { data } = await FetchApi.get('meetups/search')

    dispatch({
      type: MEETUPS_TYPES.LOAD_MEETUPS,
      meetups: data
    })

  } catch (e) {
    toast('error on loading meetups list')
  } finally {
    dispatch(setLoading(false))
  }
}

export const loadMeetupById = (meetupId) => async dispatch => {
  try {
    dispatch(setLoading(true))
    const { data } = await FetchApi.get(`meetups?id=${meetupId}`)

    dispatch({
      type: MEETUPS_TYPES.LOAD_MEETUP_BY_ID,
      meetup: data
    })

    return data
  } catch (e){
    toast('Միթաը բեռնելուց խնդիր առաջացավ')
  } finally {
    dispatch(setLoading(false))
  }
}

export const joinMeetup = (meetupId, isJoin) => async dispatch => {
  try {
    await FetchApi.post('meetups/toggle-join', { meetupId, isJoin })

    dispatch({
      type: MEETUPS_TYPES.TOGGLE_MEETUP_JOIN,
      meetupId,
      isJoin
    })

    toast(`Դուք ${isJoin ? 'միացաք' : 'դուրս եկաք'} միթափի${isJoin ? 'ն' : 'ց'}`)
  } catch (e) {
    toast('Գործողության ընթացքում խնդիր առաջացավ')
  }
}

export const deleteMeetup = (meetupId) => async dispatch => {
  try {
    dispatch(setLoading(true))
    await FetchApi.delete(`meetups?id=${meetupId}`)

    dispatch({
      type: MEETUPS_TYPES.DELETE_MEETUP,
      meetupId
    })

    toast('Միթափը ջնջվեց')
  } catch (e) {
    toast('Միթափը ջնջելու ընթացքում խնդիր առաջացավ')
  } finally {
    dispatch(setLoading(false))
  }
}

export const createMeetup = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: MEETUPS_TYPES.CREATE_MEETUP_REQUEST
    })

    await FetchApi.post('meetups', form)

    dispatch({
      type: MEETUPS_TYPES.CREATE_MEETUP_SUCCESS,
    })

    if (typeof onSuccess === 'function')
      onSuccess()

  } catch (e) {
    dispatch({
      type: MEETUPS_TYPES.CREATE_MEETUP_FAIL,
      error: e.data 
        ? e.data.message
        : e.message 
    })
  }
}

export const setFormInitialData = (data) => dispatch => {
  dispatch({
    type: MEETUPS_TYPES.SET_FORM_INITIAL_DATA,
    initialData: data
  })
}

export const clearFormData = () => ({
  type: MEETUPS_TYPES.CLEAR_FORM
})

export const updateMeetup = (form, onSuccess) => async dispatch => {
  try {
    dispatch({
      type: MEETUPS_TYPES.UPDATE_MEETUP_REQUEST
    })

    await FetchApi.put('meetups', form)

    dispatch({
      type: MEETUPS_TYPES.UPDATE_MEETUP_SUCCESS
    })

    toast('Միթափը թարմացվեց!!')

    if (typeof onSuccess === 'function')
      onSuccess()
  } catch (e) {
    toast('Միթափը թարմացնելու ընթացքում խնդիր առաջացավ')
    dispatch({
      type: MEETUPS_TYPES.UPDATE_MEETUP_FAIL,
      error: e.data 
        ? e.data.message
        : e.message 
    }) 
  }
}