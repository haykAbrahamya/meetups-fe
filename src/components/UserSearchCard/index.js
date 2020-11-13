import { connect } from 'react-redux'


import { UserSearchCard as Self } from './UserSearchCard'

const mapStateToProps = ({ app }) => ({
  isMobile: app.dimensions.width < 768
})

export const UserSearchCard = connect(mapStateToProps)(Self)
