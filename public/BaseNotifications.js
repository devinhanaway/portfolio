import React from 'react'
import { browserHistory } from 'react-router'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import Badge from 'material-ui/Badge'
import api from 'utils/api'
import { ToolbarGroup } from 'material-ui/Toolbar'
import Popover from 'material-ui/Popover'
import getstream from 'utils/getstream'
import { getCurrent } from 'utils/auth'


export default React.createClass({

  getInitialState() {
    return {
      showCreateOptions: false,
      showCreateOptionsEl: null,
      user: getCurrent(),
      notifications: [],
      unread: 0,
    }
  },

  componentDidMount() {
    const query = `
      query Query(
        $feed: FeedType!
      ){
        getStreamToken(
          feed: $feed
        )
      }
    `

    const vars = {
      feed: this._feed
    }

    api(query, vars)
      .then((res)=>{
        if (this.isMounted()) {
          const token = res.getStreamToken
          this._getstream = getstream.feed(this._feed, this.state.user.id, token)
          this._getstream.subscribe((data)=>{
            this.handleLoadNotifications()
          })
          this.handleLoadNotifications()
        }
      })
  },

  handleLoadNotifications() {

    const query = `
      query Query(
        $feed: FeedType!
      ){
        getFeed(
          feed: $feed
        ){
          notifications{
            model
            id
            label
            avatar
            time
          }
          unread
        }
      }
    `

    const vars = {
      feed: this._feed
    }

    api(query, vars)
      .then((res)=>{
        if (this.isMounted()) {
          this.setState(res.getFeed)
        }
      })

  },


  handleShowCreateOptions(event){
    event.preventDefault()

    // // mark notifications as read
    //
    // this._getstream.get({})

    this.setState({
      showCreateOptions: true,
      showCreateOptionsEl: event.currentTarget,
    })
  },

  handleHideCreateOptions() {
    this.setState({
      showCreateOptions: false,
    })
  },

  render() {

    return (
      <ToolbarGroup>

        <Badge
          style={{paddingTop: 7}}
          badgeContent={this.state.unread}
          secondary={true}
          badgeStyle={{top: 12, right: this._badgeRightPos, border: '1px solid #eee'}}
          onClick={this.handleShowCreateOptions}>
          <IconButton
            tooltip={this._tooltip}
            onClick={this.handleShowCreateOptions}>
            {this._icon}
          </IconButton>
        </Badge>

        <Popover
          open={this.state.showCreateOptions}
          anchorEl={this.state.showCreateOptionsEl}
          onRequestClose={this.handleHideCreateOptions}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}>
          <Menu>

            {this.state.notifications.map((activity, idx)=>(
              <MenuItem
                key={idx}
                style={{lineHeight: 2}}
                primaryText={this.getMenuItemContent.call(this, activity)}
                onClick={this.handleClickActivity.bind(this, activity)} />
            ))}

          </Menu>
        </Popover>
      </ToolbarGroup>
    )

  }

})
