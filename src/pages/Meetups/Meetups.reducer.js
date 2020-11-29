import { MEETUPS_TYPES } from './Meetups.types'

const formInitialState = {
  id: null,
  name: '', 
  description: '',
  length: '',
  time: {
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  },
  startDate: new Date()
}

const initialState = {
  results: [],
  currentMeetup: {},
  meetupForm: {
    loading: false,
    error: null,
    editMode: false,
    initialData: formInitialState
  }
}

export const meetups = (state = initialState, action) => {
  switch (action.type) {
    case MEETUPS_TYPES.LOAD_MEETUPS:
      return {
        ...state,
        results: action.meetups
      }
    case MEETUPS_TYPES.LOAD_MEETUP_BY_ID:
      return {
        ...state,
        currentMeetup: action.meetup,
        meetupForm: {
          ...state.meetupForm,
          editMode: true,
          initialData: action.meetup
        }
      }
    case MEETUPS_TYPES.TOGGLE_MEETUP_JOIN:
      const meetupIndex = state.results.findIndex(_ => _.id === action.meetupId)
      const meetup = state.results[meetupIndex]

      return {
        ...state,
        results: [
          ...state.results.slice(0, meetupIndex),
          {
            ...meetup,
            joined: action.isJoin,
            participantsCount: action.isJoin
              ? meetup.participantsCount + 1 
              : meetup.participantsCount - 1
          },
          ...state.results.slice(meetupIndex + 1)
        ]
      }
    case MEETUPS_TYPES.DELETE_MEETUP:
      return {
        ...state,
        results: state.results.filter(_ => _.id !== action.meetupId)
      }
    case MEETUPS_TYPES.SET_FORM_INITIAL_DATA:
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          editMode: true,
          initialData: {
            ...state.meetupForm.initialData,
            ...action.initialData
          }
        }
      }
    case MEETUPS_TYPES.CLEAR_FORM: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          editMode: false,
          initialData: formInitialState
        }
      }
    }
    case MEETUPS_TYPES.CREATE_MEETUP_REQUEST: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          loading: true
        }
      }
    }
    case MEETUPS_TYPES.CREATE_MEETUP_SUCCESS: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          loading: false,
          error: null
        }
      }
    }
    case MEETUPS_TYPES.CREATE_MEETUP_FAIL: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          loading: false,
          error: action.error
        }
      }
    }
    case MEETUPS_TYPES.UPDATE_MEETUP_REQUEST: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          loading: true
        }
      }
    }
    case MEETUPS_TYPES.UPDATE_MEETUP_SUCCESS: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          error: null,
          loading: false
        }
      }
    }
    case MEETUPS_TYPES.UPDATE_MEETUP_FAIL: {
      return {
        ...state,
        meetupForm: {
          ...state.meetupForm,
          loading: false,
          error: action.error
        }
      }
    }
    default:
      return state
  }
}
