import Taro, { Component } from '@tarojs/taro'
import { AtModal, AtModalContent, AtTabs, AtInput, AtTextarea, AtButton, AtTabsPane, AtCalendar, AtCheckbox, AtTabBar, AtIcon, AtList, AtMessage, AtListItem, AtFloatLayout } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import conf from '../../utils/config'
import api from '../../utils/api'
import withLogin from '../../utils/withLogin'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.styl'

@withLogin()

class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      checkedList: [],
      showBottomTab: false,
      showAddContentPanel: false,
      backlogList: [],
      memoList: [],
      memoTitle: '',
      memoContent: '',
      tabs: [],
      backlogValue: '',
      titleValue: '',
      showModalAdd: false
    }
  }
  
  config = {
    navigationBarTitleText: '猪维乐丨日历'
  }

  handleChange (value) {
    const cur = this;
    function getArrDifference(arr1, arr2) {
      return arr1.concat(arr2).filter(function(v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
      })
    }
    const res = getArrDifference(value, this.state.checkedList)
    console.log(value)
    console.log(res)
    this.setState({
      checkedList: value
    }, async () => {
      await api.post(conf.updateBacklog, {backlogId: res[0]})
      this.getBacklogList()
    })
  }
  handleClick (value) {
    this.setState({
      current: value
    })
    Taro.setNavigationBarTitle({
      title: value == 0 ? '猪维乐丨TAGS' : '猪维乐丨MEMO'
    })
  }
  handleClose (value) {
    console.log(value)
    this.setState({
      showAddContentPanel: false
    })
  }
  showPanel (state) {
    this.setState({
      showAddContentPanel: !state
    })
  }
  chooseDate (data) {
    console.log(data.value)
    this.getBacklogList(data.value)
  }

  handleBacklogChange (event) {
    this.setState({
      backlogValue: event.target.value
    })
  }

  handleTitleChange (value) {
    this.setState({
      titleValue: value
    })
  }

  async subBacklog () {
    // do something
    this.setState({
      showModalAdd: false
    }, async () => {
      const { titleValue, backlogValue, current} = this.state
      const res = await api.post(current == 0 ? conf.addBacklog : conf.addMemo, {
        content: backlogValue,
        title: titleValue
      })
      console.log(res)
      if(res.data.code == 0) {
        Taro.atMessage({
          'message': '添加成功',
          'type': 'success',
        })
        setTimeout(() => {
          Taro.navigateBack({
            delta: 1
          })
        },1500)
        this.setState({
          backlogValue: '',
          titleValue: ''
        })
        if (current == 0) {
          await this.getBacklogList()
        } else {
          const res = await api.get(conf.getMemoList)
          this.setState({
            memoList: res.data.data
          })
        }
      } else {
        Taro.atMessage({
          'message': '添加失败，稍后再试',
          'type': 'error',
        })
      }
    })
  }

  linkAdd () {
    this.setState({
      showModalAdd: true
    })
  }

  handleCloseAdd () {
    this.setState({
      showModalAdd: false
    })
  }

  handleCancelAdd () {
    this.setState({
      showModalAdd: false
    })
  }

  setMemoMain (title, content) {
    this.setState({
      memoTitle: title,
      memoContent: content,
      showAddContentPanel: true
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  async getBacklogList (date) {
    let params = {}
    if (date) {
      params = {date}
    }
    const res = await api.get(conf.getBacklogList, params)
    console.log(res)
    if (res.data.code != 0) {
      return
    }
    let finishList = []
    for (let index = 0; index < res.data.data.length; index++) {
      const element = res.data.data[index];
      element.value = element.id
      element.disabled = element.state == 0 ? false : true
      if (element.state == 1) finishList.push(element.id)
    }
    this.setState({
      backlogList: res.data.data,
      checkedList: finishList
    })
  }

  async componentDidMount () {
    const findRes = await api.get(conf.getTabList)
    this.setState({
      tabs: findRes.data.data
    })
    await this.getBacklogList()
    const res = await api.get(conf.getMemoList)
    this.setState({
      memoList: res.data.data
    })
  }

  onPageScroll (e) {
    if (e.scrollTop > 55) {
      this.setState({
        showBottomTab: true
      })
    } else {
      this.setState({
        showBottomTab: false
      })
    }
  }

  componentWillUnmount () { }

  async componentDidShow () { }

  copyBtn () {
    Taro.atMessage({
      'message': '复制功能开发中···'
    })
  }

  editBtn () {
    Taro.atMessage({
      'message': '编辑功能开发中···'
    })
  }

  deleteBtn () {
    Taro.atMessage({
      'message': '删除功能开发中···'
    })
  }

  componentDidHide () { }

  render () {
    const FALSEBOOLEN = false
    const TRUEBOOLEN = true
    const { titleValue, backlogValue, showModalAdd, current, showAddContentPanel, backlogList, checkedList, memoList, memoTitle, memoContent, tabs } = this.state
    let backlogMain = null
    let memoMain = null
    let defaultMain = null
    let addMain = null
    if (tabs.length >= 2) {
      tabs[0].text = backlogList.length - checkedList.length
      tabs[1].text = memoList ? memoList.length : 0
      defaultMain = (
        <View style='padding-top: 30px;text-align: center'>
          <View style='margin-bottom: 30px'>
            <AtIcon value='bell' size='50' color='rgba(52, 72, 94, 0.5)'></AtIcon>
          </View>
          <Text>{`${current == 0 ? '今天没有TAGS' : '没有MEMO'}，快去添加吧~~~`}</Text>
        </View>
      )
      if (backlogList.length) {
        backlogMain = (
          <AtCheckbox
            options={backlogList}
            selectedList={checkedList}
            onChange={this.handleChange.bind(this)}
          />
        )
      }
      if (memoList && memoList.length) {
        memoMain = (
          <AtList>
            {
              memoList.map((item, index) => {
                return <AtListItem 
                  key={String(index)}
                  title={item.title}
                  extraText='查看详情'
                  arrow='right'
                  iconInfo={{ size: 25, color: 'rgba(52, 72, 94, 0.5)', value: 'bookmark', }}
                  onClick={this.setMemoMain.bind(this, item.title, item.content)}
                />
              })
            }
          </AtList>
        )
      }
      if (showModalAdd) {
        addMain = (
          <AtModal onClose={ this.handleCloseAdd.bind(this) } isOpened={showModalAdd}>
            <AtModalHeader>
              <View className='addPanel-title'>{`添加${current == 0 ? 'TAGS' : 'MEMO'}`}</View>
            </AtModalHeader>
            <AtModalContent>
              <View style='margin-bottom: 20px'>
                <AtInput
                  disabled={current == 0 ? true : false}
                  title='标题'
                  type='text'
                  placeholder='选填'
                  value={titleValue}
                  onChange={this.handleTitleChange.bind(this)}
                />
              </View>
              <View style='margin-bottom: 20px'>
                <AtTextarea
                  showConfirmBar={TRUEBOOLEN}
                  value={backlogValue}
                  onChange={this.handleBacklogChange.bind(this)}
                  maxLength={30}
                  placeholder={`输入${current == 0 ? 'TAGS' : 'MEMO'}...`}
                />
                </View>
            </AtModalContent>
            <AtModalAction>
              <View className='addPanel-btn clearfix'>
                <View className='addPanel-btn-cancel'>
                  <AtButton type='primary' onClick={ this.handleCancelAdd.bind(this) }>取消</AtButton>
                </View>
                <View className='addPanel-btn-confirm'>
                  <AtButton type='primary' onClick={this.subBacklog.bind(this)}>确定</AtButton>
                </View>
              </View>
            </AtModalAction>
          </AtModal>
        )
      }
    }
    return (
      <View>
        <AtTabs className="page_index" swipeable={FALSEBOOLEN} current={current} tabList={tabs} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={current} index={0} >
            <View className='todo-main' style='padding-bottom: 80px'>
              <View className='date-pannel'>
                <AtCalendar onDayClick={this.chooseDate.bind(this)} />
              </View>
              {backlogList.length ? backlogMain : defaultMain}
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style='padding-bottom: 80px'>
              {memoList.length ? memoMain : defaultMain}
            </View>
          </AtTabsPane>
        </AtTabs>
        <View style={{display: tabs.length >= 2 ? "block" : "none"}} className='todo-add-btn' onClick={this.linkAdd.bind(this)}>
          <AtIcon value='add-circle' size='50' color='rgba(52, 72, 94, 0.5)'></AtIcon>
        </View>
        <AtFloatLayout isOpened={showAddContentPanel} title={memoTitle} onClose={ this.handleClose.bind(this) }>
          <View style='margin-bottom:20px'>
            <AtButton onClick={this.copyBtn.bind(this)} type='primary' size='small' style='margin-right:20px'>复制</AtButton>
            <AtButton onClick={this.editBtn.bind(this)} type='primary' size='small' style='margin-right:20px'>编辑</AtButton>
            <AtButton onClick={this.deleteBtn.bind(this)} type='primary' size='small'>删除</AtButton>
          </View>
          {memoContent}
        </AtFloatLayout>
        <View style={{display: this.state.showBottomTab ? "block" : "none"}}>
          <AtTabBar
            fixed
            tabList={tabs}
            onClick={this.handleClick.bind(this)}
            current={current}
          />
        </View>
        <AtMessage />
        {addMain}
      </View>
    )
  }
}

export default Index
