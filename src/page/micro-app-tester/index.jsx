import React, { useState } from 'react'
import {
  Input, Button, Radio, Form
} from 'antd'
import { registerMicroApps } from 'qiankun'
import { getFormattedMicroApps } from '@/qiankun/starter'
import history from '@/util/history'

export default function MicroAppTester () {
  const [route, setRoute] = useState('')
  const [entry, setEntry] = useState('')
  const [entryType, setEntryType] = useState('js')

  const submit = () => {
    const apps = getFormattedMicroApps([{
      name: route,
      route,
      entry,
      entryType
    }])

    registerMicroApps(apps)

    history.push(`/${route}/1/2`)
  }

  return (
    <div>
      micro app tester
      <Form>
        <Form.Item label="route">
          <Input value={route} onChange={(e) => setRoute(e.target.value)} placeholder="app name" />
        </Form.Item>
        <Form.Item label="entry">
          <Input value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="http://xx/xx.(js/html)" />
        </Form.Item>
        <Form.Item label="entryType">
          <Radio.Group onChange={(e) => setEntryType(e.target.value)} value={entryType}>
            <Radio value="js">js</Radio>
            <Radio value="html">html</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button onClick={submit}>test app</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
